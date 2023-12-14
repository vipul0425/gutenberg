/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { store as coreStore } from '@wordpress/core-data';
import { parse, serialize } from '@wordpress/blocks';
/**
 * Internal dependencies
 */
import { unlock } from '../../lock-unlock';
import useGoToOverlayEditor from './use-go-to-overlay-editor';
import useOverlay from './use-overlay';

const { useHistory } = unlock( routerPrivateApis );

export default function EditOverlayButton( { navRef } ) {
	// // Get the overlay with the slug `navigation-overlay`.
	const overlay = useOverlay();

	// Get the default template part that core provides.
	const { coreOverlay } = useSelect( ( select ) => {
		return {
			coreOverlay: select( coreStore ).getEntityRecord(
				'postType',
				'wp_template_part',
				`core//navigation-overlay`
			),
		};
	}, [] );

	const { saveEntityRecord } = useDispatch( coreStore );

	const history = useHistory();

	const goToOverlayEditor = useGoToOverlayEditor();

	function findNavigationBlock( blocks ) {
		for ( const block of blocks ) {
			if ( block.name === 'core/navigation' ) {
				return block;
			}

			// If this block has inner blocks, recurse.
			if ( block.innerBlocks.length ) {
				const innerBlock = findNavigationBlock( block.innerBlocks );
				if ( innerBlock ) {
					return innerBlock;
				}
			}
		}

		return null;
	}

	async function handleEditOverlay( event ) {
		event.preventDefault();

		// There may already be an overlay with the slug `navigation-overlay`.
		// This might be a user created one, or one provided by the theme.
		// If so, then go directly to the editor for that overlay template part.
		if ( overlay ) {
			goToOverlayEditor( overlay.id );
			return;
		}

		// If there is not overlay then create one using the base template part
		// provided by Core.
		// TODO: catch and handle errors.
		const overlayBlocks = buildOverlayBlocks(
			coreOverlay.content.raw,
			navRef
		);

		// The new overlay should use the current Theme's slug.
		const newOverlay = await createOverlay( overlayBlocks );

		goToOverlayEditor( newOverlay?.id );
	}

	function buildOverlayBlocks( content, parentNavRef ) {
		const parsedBlocks = parse( content );
		const overlayNavBlock = findNavigationBlock( parsedBlocks );

		// Update the Navigation block in the overlay to use
		// the same ref as the parent block.
		// Todo: what happens if ref doesn't exist?
		// Should we copy the uncontrolled inner blocks?
		overlayNavBlock.attributes.ref = parentNavRef;
		return parsedBlocks;
	}

	async function createOverlay( overlayBlocks ) {
		return await saveEntityRecord(
			'postType',
			'wp_template_part',
			{
				slug: `navigation-overlay`, // `theme//` prefix is appended automatically.
				title: `Navigation Overlay`,
				content: serialize( overlayBlocks ),
				area: 'navigation-overlay',
			},
			{ throwOnError: true }
		);
	}
	if ( ! history || ( ! coreOverlay && ! overlay ) ) {
		return null;
	}

	return (
		<Button
			aria-label={ __( 'Edit Overlay' ) }
			variant="link"
			className="wp-block-navigation__edit-overlay-button"
			onClick={ handleEditOverlay }
		>
			{ __( 'Edit' ) }
		</Button>
	);
}

/**
 * WordPress dependencies
 */
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

export default function useOverlay() {
	return useSelect( ( select ) => {
		const themeSlug = select( coreStore ).getCurrentTheme()?.stylesheet;

		const overlay = themeSlug
			? select( coreStore ).getEntityRecord(
					'postType',
					'wp_template_part',
					`${ themeSlug }//navigation-overlay`
			  )
			: null;

		return overlay;
	}, [] );
}

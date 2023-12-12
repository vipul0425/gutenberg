/**
 * WordPress dependencies
 */
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

export default function useCustomOverlay() {
	return useSelect( ( select ) => {
		const themeSlug = select( coreStore ).getCurrentTheme()?.stylesheet;

		const customOverlay = themeSlug
			? select( coreStore ).getEntityRecord(
					'postType',
					'wp_template_part',
					`${ themeSlug }//navigation-overlay`
			  )
			: null;

		return customOverlay;
	}, [] );
}

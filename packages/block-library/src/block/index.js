/**
 * WordPress dependencies
 */
import { symbol as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import lazyLoad from '../utils/lazy-load';
import initBlock from '../utils/init-block';
import metadata from './block.json';

const { name } = metadata;

export { metadata, name };

export const settings = {
	edit: lazyLoad( () =>
		window.__experimentalPatternPartialSyncing
			? import( /* webpackChunkName: "block/editor-v2" */ './edit' )
			: import( /* webpackChunkName: "block/editor-v1" */ './v1/edit' )
	),
	icon,
};

export const init = () => initBlock( { name, metadata, settings } );

/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'Templates', () => {
	test.beforeAll( async ( { requestUtils } ) => {
		await Promise.all( [
			requestUtils.activateTheme( 'emptytheme' ),
			requestUtils.setGutenbergExperiments( [ 'gutenberg-dataviews' ] ),
		] );
	} );
	test.afterAll( async ( { requestUtils } ) => {
		await Promise.all( [
			requestUtils.activateTheme( 'twentytwentyone' ),
			requestUtils.setGutenbergExperiments( [] ),
		] );
	} );
	test( 'Sorting', async ( { admin, page } ) => {
		await admin.visitSiteEditor( { path: '/wp_template/all' } );
		// Descending by title.
		await page.getByRole( 'button', { name: 'Template' } ).click();
		await page.getByRole( 'menuitem', { name: 'Sort descending' } ).click();
		const firstTitle = page
			.getByRole( 'region', {
				name: 'Template',
				includeHidden: true,
			} )
			.getByRole( 'heading', {
				level: 3,
				includeHidden: true,
			} )
			.first();
		await expect( firstTitle ).toHaveText( 'Tag Archives' );
		// Ascending by title.
		await page.getByRole( 'menuitem', { name: 'Sort ascending' } ).click();
		await expect( firstTitle ).toHaveText( 'Category Archives' );
	} );
	test( 'Filtering', async ( { requestUtils, admin, page } ) => {
		await requestUtils.createTemplate( 'wp_template', {
			slug: 'date',
			title: 'Date Archives',
			content: 'hi',
		} );
		await admin.visitSiteEditor( { path: '/wp_template/all' } );
		// Global search.
		await page.getByRole( 'searchbox', { name: 'Filter list' } ).click();
		await page.keyboard.type( 'tag' );
		const titles = page
			.getByRole( 'region', { name: 'Template' } )
			.getByRole( 'heading', { level: 3 } );
		await expect( titles ).toHaveCount( 1 );
		await expect( titles.first() ).toHaveText( 'Tag Archives' );
		await page.getByRole( 'button', { name: 'Reset filters' } ).click();
		await expect( titles ).toHaveCount( 6 );

		// Filter by author.
		await page.getByRole( 'button', { name: 'Add filter' } ).click();
		await page.getByRole( 'menuitem', { name: 'Author' } ).hover();
		await page.getByRole( 'menuitemcheckbox', { name: 'admin' } ).click();
		await expect( titles ).toHaveCount( 1 );
		await expect( titles.first() ).toHaveText( 'Date Archives' );

		// Filter by author and text.
		await page.getByRole( 'button', { name: 'Reset filters' } ).click();
		await page.getByRole( 'searchbox', { name: 'Filter list' } ).click();
		await page.keyboard.type( 'archives' );
		await expect( titles ).toHaveCount( 3 );
		await page.getByRole( 'button', { name: 'Add filter' } ).click();
		await page.getByRole( 'menuitem', { name: 'Author' } ).hover();
		await page
			.getByRole( 'menuitemcheckbox', { name: 'Emptytheme' } )
			.click();
		await expect( titles ).toHaveCount( 2 );

		await requestUtils.deleteAllTemplates( 'wp_template' );
	} );
	test( 'Field visibility', async ( { admin, page } ) => {
		await admin.visitSiteEditor( { path: '/wp_template/all' } );
		await page.getByRole( 'button', { name: 'Description' } ).click();
		await page.getByRole( 'menuitem', { name: 'Hide' } ).click();
		await expect(
			page.getByRole( 'button', { name: 'Description' } )
		).toBeHidden();
	} );
} );

/**
 * External dependencies
 */
import { render, screen, waitFor } from '@testing-library/react';
import { press, hover, click, sleep } from '@ariakit/test';

/**
 * WordPress dependencies
 */
import { shortcutAriaLabel } from '@wordpress/keycodes';

/**
 * Internal dependencies
 */
import Button from '../../button';
import Modal from '../../modal';
import Tooltip, { TOOLTIP_DELAY } from '..';

const props = {
	children: <Button>Tooltip anchor</Button>,
	text: 'tooltip text',
};

const expectTooltipToBeVisible = () =>
	expect(
		screen.getByRole( 'tooltip', { name: 'tooltip text' } )
	).toBeVisible();

const expectTooltipToBeHidden = () =>
	expect(
		screen.queryByRole( 'tooltip', { name: 'tooltip text' } )
	).not.toBeInTheDocument();

const waitForTooltipToShow = ( timeout = TOOLTIP_DELAY ) =>
	waitFor( () => expectTooltipToBeVisible(), { timeout } );

const waitForTooltipToHide = () => waitFor( () => expectTooltipToBeHidden );

const hoverOutside = async () => {
	await hover( document.body );
	await hover( document.body, { clientX: 10, clientY: 10 } );
};

describe( 'Tooltip', () => {
	it( 'should not render the tooltip if multiple children are passed', async () => {
		render(
			// expected TS error since Tooltip cannot have more than one child element
			// @ts-expect-error
			<Tooltip { ...props }>
				<Button>First button</Button>
				<Button>Second button</Button>
			</Tooltip>
		);

		expect(
			screen.getByRole( 'button', { name: 'First button' } )
		).toBeVisible();
		expect(
			screen.getByRole( 'button', { name: 'Second button' } )
		).toBeVisible();

		await press.Tab();

		expectTooltipToBeHidden();
	} );

	it( 'should associate the tooltip text with its anchor via the accessible description when visible', async () => {
		render( <Tooltip { ...props } /> );

		// The anchor can not be found by querying for its description,
		// since that is present only when the tooltip is visible
		expect(
			screen.queryByRole( 'button', { description: 'tooltip text' } )
		).not.toBeInTheDocument();

		// Hover the anchor. The tooltip shows and its text is used to describe
		// the tooltip anchor
		await hover(
			screen.getByRole( 'button', {
				name: 'Tooltip anchor',
			} )
		);
		expect(
			await screen.findByRole( 'button', { description: 'tooltip text' } )
		).toBeInTheDocument();

		// Hover outside of the anchor, tooltip should hide
		await hoverOutside();
		await waitForTooltipToHide();
		expect(
			screen.queryByRole( 'button', { description: 'tooltip text' } )
		).not.toBeInTheDocument();
	} );

	it( 'should not render the tooltip if there is no focus', () => {
		render( <Tooltip { ...props } /> );

		expect(
			screen.getByRole( 'button', { name: 'Tooltip anchor' } )
		).toBeVisible();

		expectTooltipToBeHidden();
	} );

	it( 'should show the tooltip when focusing on the tooltip anchor and hide it the anchor loses focus', async () => {
		render(
			<>
				<Tooltip { ...props } />
				<button>Focus me</button>
			</>
		);

		// Focus the anchor, tooltip should show
		await press.Tab();
		expect(
			screen.getByRole( 'button', { name: 'Tooltip anchor' } )
		).toHaveFocus();
		await waitForTooltipToShow();

		// Focus the other button, tooltip should hide
		await press.Tab();
		expect(
			screen.getByRole( 'button', { name: 'Focus me' } )
		).toHaveFocus();
		await waitForTooltipToHide();
	} );

	it( 'should show the tooltip when the tooltip anchor is hovered and hide it when the cursor stops hovering the anchor', async () => {
		render( <Tooltip { ...props } /> );

		const anchor = screen.getByRole( 'button', { name: 'Tooltip anchor' } );

		expect( anchor ).toBeVisible();

		// Hover over the anchor, tooltip should show
		await hover( anchor );
		await waitForTooltipToShow();

		// Hover outside of the anchor, tooltip should hide
		await hoverOutside();
		await waitForTooltipToHide();
	} );

	it( 'should hide tooltip when the tooltip anchor is clicked', async () => {
		render( <Tooltip { ...props } /> );

		const anchor = screen.getByRole( 'button', { name: 'Tooltip anchor' } );

		expect( anchor ).toBeVisible();

		// Hover over the anchor, tooltip should show
		await hover( anchor );
		await waitForTooltipToShow();

		// Click the anchor, tooltip should hide
		await click( anchor );
		await waitForTooltipToHide();
	} );

	it( 'should not hide tooltip when the tooltip anchor is clicked and the `hideOnClick` prop is `false', async () => {
		render(
			<>
				<Tooltip { ...props } hideOnClick={ false } />
				<button>Click me</button>
			</>
		);

		const anchor = screen.getByRole( 'button', { name: 'Tooltip anchor' } );

		expect( anchor ).toBeVisible();

		// Hover over the anchor, tooltip should show
		await hover( anchor );
		await waitForTooltipToShow();

		// Click the anchor, tooltip should not hide
		await click( anchor );
		await waitForTooltipToShow();

		// Click another button, tooltip should hide
		await click( screen.getByRole( 'button', { name: 'Click me' } ) );
		await waitForTooltipToHide();
	} );

	it( 'should respect custom delay prop when showing tooltip', async () => {
		const ADDITIONAL_DELAY = 100;

		render(
			<Tooltip { ...props } delay={ TOOLTIP_DELAY + ADDITIONAL_DELAY } />
		);

		const anchor = screen.getByRole( 'button', { name: 'Tooltip anchor' } );
		expect( anchor ).toBeVisible();

		// Hover over the anchor
		await hover( anchor );
		expectTooltipToBeHidden();

		// Advance time by default delay
		await sleep( TOOLTIP_DELAY );

		// Tooltip hasn't appeared yet
		expectTooltipToBeHidden();

		// Wait for additional delay for tooltip to appear
		await sleep( ADDITIONAL_DELAY );
		await waitForTooltipToShow();

		// Hover outside of the anchor, tooltip should hide
		await hoverOutside();
		await waitForTooltipToHide();
	} );

	it( 'should show tooltip when the anchor button is disabled but focusable', async () => {
		render(
			<Tooltip { ...props }>
				<Button disabled __experimentalIsFocusable>
					Tooltip anchor
				</Button>
			</Tooltip>
		);

		const anchor = screen.getByRole( 'button', { name: 'Tooltip anchor' } );

		expect( anchor ).toBeVisible();
		expect( anchor ).toHaveAttribute( 'aria-disabled', 'true' );

		// Hover over the anchor, tooltip should show
		await hover( anchor );
		await waitForTooltipToShow();

		// Hover outside of the anchor, tooltip should hide
		await hoverOutside();
		await waitForTooltipToHide();
	} );

	it( 'should not show tooltip if the mouse leaves the tooltip anchor before set delay', async () => {
		const onMouseEnterMock = jest.fn();
		const onMouseLeaveMock = jest.fn();
		const HOVER_OUTSIDE_ANTICIPATION = 200;

		render(
			<Tooltip { ...props }>
				<Button
					onMouseEnter={ onMouseEnterMock }
					onMouseLeave={ onMouseLeaveMock }
				>
					Tooltip anchor
				</Button>
			</Tooltip>
		);

		const anchor = screen.getByRole( 'button', { name: 'Tooltip anchor' } );
		expect( anchor ).toBeVisible();

		// Hover over the anchor, tooltip hasn't appeared yet
		await hover( anchor );
		expect( onMouseEnterMock ).toHaveBeenCalledTimes( 1 );
		expectTooltipToBeHidden();

		// Advance time, tooltip hasn't appeared yet because TOOLTIP_DELAY time
		// hasn't passed yet
		await sleep( TOOLTIP_DELAY - HOVER_OUTSIDE_ANTICIPATION );
		expectTooltipToBeHidden();

		// Hover outside of the anchor, tooltip still hasn't appeared yet
		await hoverOutside();
		expectTooltipToBeHidden();

		expect( onMouseEnterMock ).toHaveBeenCalledTimes( 1 );
		expect( onMouseLeaveMock ).toHaveBeenCalledTimes( 1 );

		// Advance time again, so that we reach the full TOOLTIP_DELAY time
		await sleep( HOVER_OUTSIDE_ANTICIPATION );

		// Tooltip won't show, since the mouse has left the tooltip anchor
		expectTooltipToBeHidden();
	} );

	it( 'should show the shortcut in the tooltip when a string is passed as the shortcut', async () => {
		render( <Tooltip { ...props } shortcut="shortcut text" /> );

		// Hover over the anchor, tooltip should show
		await hover( screen.getByRole( 'button', { name: 'Tooltip anchor' } ) );
		expect(
			screen.getByRole( 'tooltip', {
				name: 'tooltip text shortcut text',
			} )
		).toBeVisible();

		// Hover outside of the anchor, tooltip should hide
		await hoverOutside();
		await waitForTooltipToHide();
	} );

	it( 'should show the shortcut in the tooltip when an object is passed as the shortcut', async () => {
		render(
			<Tooltip
				{ ...props }
				shortcut={ {
					display: '⇧⌘,',
					ariaLabel: shortcutAriaLabel.primaryShift( ',' ),
				} }
			/>
		);

		// Hover over the anchor, tooltip should show
		await hover( screen.getByRole( 'button', { name: 'Tooltip anchor' } ) );
		const tooltip = screen.getByRole( 'tooltip', {
			name: 'tooltip text Control + Shift + Comma',
		} );
		expect( tooltip ).toBeVisible();
		expect( tooltip ).toHaveTextContent( /⇧⌘,/i );

		// Hover outside of the anchor, tooltip should hide
		await hoverOutside();
		await waitForTooltipToHide();
	} );

	it( 'should close the parent dialog component when pressing the Escape key while the tooltip is visible', async () => {
		const onRequestClose = jest.fn();
		render(
			<Modal onRequestClose={ onRequestClose }>
				<p>Modal content</p>
			</Modal>
		);

		expectTooltipToBeHidden();

		const closeButton = screen.getByRole( 'button', {
			name: /close/i,
		} );

		// Hover over the anchor, tooltip should show
		await hover( closeButton );
		await waitFor( () =>
			expect(
				screen.getByRole( 'tooltip', { name: /close/i } )
			).toBeVisible()
		);

		// Press the Escape key, Modal should request to be closed
		await press.Escape();
		expect( onRequestClose ).toHaveBeenCalled();

		// Hover outside of the anchor, tooltip should hide
		await hoverOutside();
		await waitForTooltipToHide();
	} );
} );

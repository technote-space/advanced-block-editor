const Mousetrap = require( 'mousetrap' );
global.Mousetrap = Mousetrap;
global.window.matchMedia = () => ( {
	matches: true, addListener: () => {
	},
} );
global.abeParams = {
	translate: {
		test: 'テスト',
	},
};

const blockLibrary = require( '@wordpress/block-library' );
const blocks = require( '@wordpress/blocks' );
const components = require( '@wordpress/components' );
const editor = require( '@wordpress/editor' );
const compose = require( '@wordpress/compose' );
const data = require( '@wordpress/data' );
const element = require( '@wordpress/element' );
global.wp = {
	blockLibrary,
	blocks,
	components,
	editor,
	compose,
	data,
	element,
};

blockLibrary.registerCoreBlocks();

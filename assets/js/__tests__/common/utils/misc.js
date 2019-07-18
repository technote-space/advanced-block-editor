const { dispatch } = wp.data;
const { createBlock } = wp.blocks;
import { getPluginName, addSubscribe } from '../../../src/common/utils';
import { PLUGIN_NAME } from '../../../src/constant';

describe( 'getPluginName test', () => {
	it( 'should get plugin name', () => {
		expect( getPluginName( 'test' ) ).toStartWith( PLUGIN_NAME );
		expect( getPluginName( 'test' ) ).toEndWith( 'test' );
	} );
} );

describe( 'addSubscribe test', () => {
	it( 'should subscribe', () => {
		let count = 0;
		let calledSelector = 0;
		let calledListener = 0;
		let changeCount = true;
		addSubscribe( () => {
			calledSelector++;
			if ( changeCount ) {
				return ++count;
			}
			return count;
		}, ( selectedValue ) => {
			calledListener++;
			expect( selectedValue ).toBe( count ); // eslint-disable-line no-magic-numbers
		} );

		dispatch( 'core/block-editor' ).insertBlocks(
			createBlock( 'core/paragraph', {} ),
		);
		expect( calledSelector ).toBe( 2 ); // eslint-disable-line no-magic-numbers
		expect( calledListener ).toBe( 1 ); // eslint-disable-line no-magic-numbers

		dispatch( 'core/block-editor' ).insertBlocks(
			createBlock( 'core/paragraph', {} ),
		);
		expect( calledSelector ).toBe( 3 ); // eslint-disable-line no-magic-numbers
		expect( calledListener ).toBe( 2 ); // eslint-disable-line no-magic-numbers

		changeCount = false;
		dispatch( 'core/block-editor' ).insertBlocks(
			createBlock( 'core/paragraph', {} ),
		);
		expect( calledSelector ).toBe( 4 ); // eslint-disable-line no-magic-numbers
		expect( calledListener ).toBe( 2 ); // eslint-disable-line no-magic-numbers
	} );
} );

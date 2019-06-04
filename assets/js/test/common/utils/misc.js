require( 'should' );
const { dispatch } = wp.data;
const { createBlock } = wp.blocks;
import { getPluginName, addSubscribe } from '../../../src/common/utils';
import { PLUGIN_NAME } from '../../../src/constant';

describe( 'getPluginName test', () => {
	it( 'should get plugin name', () => {
		getPluginName( 'test' ).should.startWith( PLUGIN_NAME );
		getPluginName( 'test' ).should.endWith( 'test' );
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
			selectedValue.should.equal( count ); // eslint-disable-line no-magic-numbers
		} );

		dispatch( 'core/editor' ).insertBlocks(
			createBlock( 'core/paragraph', {} ),
		);
		calledSelector.should.equal( 2 ); // eslint-disable-line no-magic-numbers
		calledListener.should.equal( 1 ); // eslint-disable-line no-magic-numbers

		dispatch( 'core/editor' ).insertBlocks(
			createBlock( 'core/paragraph', {} ),
		);
		calledSelector.should.equal( 3 ); // eslint-disable-line no-magic-numbers
		calledListener.should.equal( 2 ); // eslint-disable-line no-magic-numbers

		changeCount = false;
		dispatch( 'core/editor' ).insertBlocks(
			createBlock( 'core/paragraph', {} ),
		);
		calledSelector.should.equal( 4 ); // eslint-disable-line no-magic-numbers
		calledListener.should.equal( 2 ); // eslint-disable-line no-magic-numbers
	} );
} );

require( 'should' );
const { dispatch } = wp.data;
import { STORE_NAME } from '../../../src/common/store';
import { isModuleActive, setModuleActive, toggleModuleActive, onModuleActive, offModuleActive } from '../../../src/common/utils';

describe( 'isModuleActive, setModuleActive test', () => {
	it( 'should false if not exists', () => {
		isModuleActive( 'test' ).should.false();
	} );

	it( 'should false if not active', () => {
		setModuleActive( 'test1' )( false );
		isModuleActive( 'test1' ).should.false();
	} );

	it( 'should true if active', () => {
		setModuleActive( 'test2' )( true );
		isModuleActive( 'test2' ).should.true();
	} );

	it( 'should toggle', () => {
		toggleModuleActive( 'test1' )();
		toggleModuleActive( 'test2' )();
		isModuleActive( 'test1' ).should.true();
		isModuleActive( 'test2' ).should.false();
	} );

	it( 'should on active', () => {
		onModuleActive( 'test2' )();
		isModuleActive( 'test2' ).should.true();
	} );

	it( 'should off active', () => {
		offModuleActive( 'test2' )();
		isModuleActive( 'test2' ).should.false();
	} );

	it( 'should reset', () => {
		onModuleActive( 'test1' )();
		onModuleActive( 'test2' )();

		dispatch( STORE_NAME ).resetState();
		isModuleActive( 'test1' ).should.false();
		isModuleActive( 'test2' ).should.false();
	} );
} );

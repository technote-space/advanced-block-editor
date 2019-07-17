const { Fragment } = wp.element;
const { CheckboxControl, Modal } = wp.components;
const { PluginMoreMenuItem } = wp.editPost;
const { withSelect, withDispatch } = wp.data;
const { withState, compose } = wp.compose;
const { __ } = wp.i18n;

import { MODULES } from '../../constant';
import { translate } from '../../common/utils';
import { isModuleActive, toggleModuleActive } from '../utils';

/**
 * @param {boolean} isOpened is opened?
 * @param {function} openModal open modal
 * @param {function} closeModal close modal
 * @param {boolean} isModuleActive is module active?
 * @returns {Component} editor settings
 * @constructor
 */
const EditorSettings = ( { isOpened, openModal, closeModal, isModuleActive } ) => {
	return <Fragment>
		<PluginMoreMenuItem
			onClick={ openModal }
		>
			{ translate( 'Advanced Block Editor setting' ) }
		</PluginMoreMenuItem>
		{ isOpened && <Modal
			title={ translate( 'Advanced Block Editor setting' ) }
			closeLabel={ __( 'Close' ) }
			onRequestClose={ closeModal }
		>
			{ Object.keys( MODULES ).map( name => <CheckboxControl
				key={ name }
				label={ translate( MODULES[ name ].label ) }
				checked={ isModuleActive( name ) }
				onChange={ toggleModuleActive( name ) }
			/> ) }
		</Modal> }
	</Fragment>;
};

export default compose(
	withState( {
		isOpened: false,
		isModuleActive: name => isModuleActive( name ),
	} ),
	withSelect( () => ( {
		isModuleActive: name => isModuleActive( name ),
	} ) ),
	withDispatch( ( dispatch, { setState } ) => ( {
		openModal: () => setState( { isOpened: true } ),
		closeModal: () => setState( { isOpened: false } ),
	} ) ),
)( EditorSettings );

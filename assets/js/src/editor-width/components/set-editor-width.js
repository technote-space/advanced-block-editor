const { Fragment } = wp.element;
const { Modal } = wp.components;
const { PluginMoreMenuItem } = wp.editPost;
const { withSelect, withDispatch } = wp.data;
const { withState, compose } = wp.compose;
const { __ } = wp.i18n;

import { STORE_NAME } from '../store';
import { translate } from '../../common/utils';
import { isActive } from '../utils';

/**
 * @param {boolean} isOpened is opened?
 * @param {function} openModal open modal
 * @param {function} closeModal close modal
 * @param {boolean} isActive is active?
 * @param {number} width width
 * @param {function} setWidth set width
 * @returns {*} Editor width setting
 * @constructor
 */
const SetEditorWidth = ( { isOpened, openModal, closeModal, isActive, width, setWidth } ) => {
	return isActive && <Fragment>
		<PluginMoreMenuItem
			onClick={ openModal }
		>
			{ translate( 'Set editor width' ) }
		</PluginMoreMenuItem>
		{ isOpened && <Modal
			title={ translate( 'Editor width setting' ) }
			closeLabel={ __( 'Close' ) }
			onRequestClose={ closeModal }
		>
			<input
				type='number'
				value={ width }
				onChange={ event => setWidth( event.target.value ) }
				style={ {
					display: 'block',
					margin: '10px auto',
				} }
			/>
		</Modal> }
	</Fragment>;
};

export default compose(
	withState( {
		isOpened: false,
	} ),
	withSelect( select => ( {
		width: select( STORE_NAME ).getWidth(),
		isActive: isActive(),
	} ) ),
	withDispatch( ( dispatch, { setState } ) => ( {
		setWidth: ( width ) => dispatch( STORE_NAME ).setWidth( width ),
		openModal: () => setState( { isOpened: true } ),
		closeModal: () => setState( { isOpened: false } ),
	} ) ),
)( SetEditorWidth );

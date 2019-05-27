const { Fragment } = wp.element;
const { PluginMoreMenuItem } = wp.editPost;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

import { STORE_NAME } from '../store/constant';
import { translate } from '../../common/utils';

/**
 * @param {function} setWidth set width
 * @returns {Component} set editor width
 * @constructor
 */
function SetEditorWidth( { setWidth } ) {
	return <Fragment>
		<PluginMoreMenuItem
			onClick={ setWidth }
		>
			{ translate( 'Set editor width' ) }
		</PluginMoreMenuItem>
	</Fragment>;
}

export default compose(
	withSelect( select => {
		return {
			width: select( STORE_NAME ).getWidth(),
		};
	} ),
	withDispatch( ( dispatch, { width } ) => {
		return {
			setWidth: () => dispatch( STORE_NAME ).setWidth( prompt( translate( 'Please input width (px)' ), width ) ),
		};
	} ),
)( SetEditorWidth );

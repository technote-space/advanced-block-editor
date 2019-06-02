const { registerPlugin } = wp.plugins;
const { select, dispatch } = wp.data;

import './styles/editor.scss';
import './store';
import { STORE_NAME } from './store/constant';
import { STORE_NAME as COMMON_STORE_NAME } from '../common/store/constant';
import { SetEditorWidth } from './components';
import { getPluginName, addSubscribe } from '../common/utils';

registerPlugin( getPluginName( 'editor-width' ), {
	render: () => <SetEditorWidth/>,
} );

wp.domReady( function() {
	dispatch( STORE_NAME ).initialize();
	addSubscribe( () => select( COMMON_STORE_NAME ).isActive( 'editor-width' ), () => dispatch( STORE_NAME ).initialize() );
} );

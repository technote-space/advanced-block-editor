const { registerPlugin } = wp.plugins;
const { dispatch } = wp.data;

import './store';
import { STORE_NAME } from './store/constant';
import { PLUGIN_NAME } from '../constant';
import { SetEditorWidth } from './components';

registerPlugin( PLUGIN_NAME, {
	render: () => <SetEditorWidth/>,
} );

wp.domReady( function() {
	dispatch( STORE_NAME ).initialize();
} );

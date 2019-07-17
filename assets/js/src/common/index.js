const { registerPlugin } = wp.plugins;

import './store';
import { EditorSettings } from './components';
import { getPluginName } from './utils';

registerPlugin( getPluginName( 'common' ), {
	render: () => <EditorSettings/>,
} );

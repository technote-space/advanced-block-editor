
import { registerPlugin } from '@wordpress/plugins';
import './store';
import { EditorSettings } from './components';
import { getPluginName } from './utils';

registerPlugin(getPluginName('common'), {
	render: () => <EditorSettings/>,
});

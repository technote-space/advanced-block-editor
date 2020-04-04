import React from 'react';
import { registerPlugin } from '@wordpress/plugins';
import { select, dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import './styles/editor.scss';
import './store';
import { STORE_NAME } from './store';
import { STORE_NAME as COMMON_STORE_NAME } from '../common/store';
import { SetEditorWidth } from './components';
import { getPluginName, addSubscribe } from '../common/utils';

registerPlugin(getPluginName('editor-width'), {
	render: () => <SetEditorWidth/>,
});

domReady(function() {
	dispatch(STORE_NAME).initialize();
	addSubscribe(() => select(COMMON_STORE_NAME).isActive('editor-width'), () => dispatch(STORE_NAME).initialize());
});

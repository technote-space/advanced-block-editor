const { registerPlugin } = wp.plugins;
const { render } = wp.element;

import './store';
import { getPluginName } from '../common/utils';
import { WordCount, SetWordCountType } from './components';

registerPlugin( getPluginName( 'wordcount' ), {
	render: () => <SetWordCountType/>,
} );

wp.domReady( function() {
	document.querySelector( '.edit-post-header-toolbar' ).insertAdjacentHTML( 'beforeend', '<div class="character-count"></div>' );
	render(
		<WordCount/>,
		document.querySelector( '.character-count' ),
	);
} );

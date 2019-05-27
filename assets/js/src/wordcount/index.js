const { render } = wp.element;

import { WordCount } from './components';

wp.domReady( function() {
	const toolbar = document.getElementsByClassName( 'edit-post-header-toolbar' )[ 0 ];
	toolbar.insertAdjacentHTML( 'beforeend', '<div class="character-count"></div>' );
	render(
		<WordCount/>,
		document.getElementsByClassName( 'character-count' )[ 0 ],
	);
} );

const { withSelect } = wp.data;
const { compose } = wp.compose;
const { count } = wp.wordcount;
const { sprintf } = wp.i18n;

import { translate } from '../../common/utils';

/**
 * @param {string} content content
 * @returns {number} word count
 */
function getWordCount( content ) {
	return count( content, 'characters_including_spaces' );
}

/**
 * @param {string} content content
 * @returns {Component} word count
 * @constructor
 */
function WordCount( { content } ) {
	return <span>{ sprintf( translate( '%d characters' ), getWordCount( content ) ) } </span>;
}

export default compose(
	withSelect( select => {
		return {
			content: select( 'core/editor' ).getEditedPostAttribute( 'content' ),
		};
	} ),
)( WordCount );

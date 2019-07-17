const { withSelect } = wp.data;
const { compose } = wp.compose;
const { count } = wp.wordcount;
const { sprintf } = wp.i18n;

import { STORE_NAME } from '../store';
import { translate } from '../../common/utils';
import { isActive } from '../utils';

/**
 * @param {string} content content
 * @param {string} wordCountType word count type
 * @returns {number} word count
 */
function getWordCount( content, wordCountType ) {
	return count( content, wordCountType );
}

/**
 * @param {string} content content
 * @param {string} wordCountType word count type
 * @param {boolean} isActive is active?
 * @returns {Component} word count
 * @constructor
 */
function WordCount( { content, wordCountType, isActive } ) {
	return isActive && <span>{ sprintf( translate( '%d characters' ), getWordCount( content, wordCountType ) ) } </span>;
}

export default compose(
	withSelect( select => ( {
		content: select( 'core/editor' ).getEditedPostAttribute( 'content' ),
		wordCountType: select( STORE_NAME ).getWordCountType(),
		isActive: isActive(),
	} ) ),
)( WordCount );

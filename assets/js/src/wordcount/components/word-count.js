import React from 'react';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { count } from '@wordpress/wordcount';
import { sprintf } from '@wordpress/i18n';
import { STORE_NAME } from '../store';
import { translate } from '../../common/utils';
import { isActive } from '../utils';

/**
 * @param {string} content content
 * @param {string} wordCountType word count type
 * @returns {number} word count
 */
const getWordCount = (content, wordCountType) => count(content, wordCountType, {});

/**
 * @param {string} content content
 * @param {string} wordCountType word count type
 * @param {boolean} isActive is active?
 * @returns {Component} word count
 * @constructor
 */
const WordCount = ({ content, wordCountType, isActive }) => isActive && <span>{sprintf(translate('%d characters'), getWordCount(content, wordCountType))} </span>;

export default compose(
  withSelect(select => ({
    content: select('core/editor').getEditedPostAttribute('content'),
    wordCountType: select(STORE_NAME).getWordCountType(),
    isActive: isActive(),
  })),
)(WordCount);

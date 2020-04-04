import { _x } from '@wordpress/i18n';

/**
 * @param {object} state state
 * @param {boolean} isSelect isSelect
 * @returns {string} type
 */
export const getWordCountType = (state, isSelect = false) => state.preferences.wordCountType ? state.preferences.wordCountType : (isSelect ? null : _x('words', 'Word count type. Do not translate!'));

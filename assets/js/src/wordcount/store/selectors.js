const { _x } = wp.i18n;

/**
 * @param {object} state state
 * @param {boolean} isSelect isSelect
 * @returns {string} type
 */
export function getWordCountType( state, isSelect = false ) {
	return state.preferences.wordCountType ? state.preferences.wordCountType : ( isSelect ? null : _x( 'words', 'Word count type. Do not translate!' ) );
}

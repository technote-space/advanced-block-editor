/**
 * @param {object} state state
 * @returns {string} width
 */
export function getWidth( state ) {
	return state.preferences.width && state.preferences.width > 0 ? state.preferences.width : ''; // eslint-disable-line no-magic-numbers
}

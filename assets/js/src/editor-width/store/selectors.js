/**
 * @param {object} state state
 * @returns {string} width
 */
export function getWidth( state ) {
	return state.width && state.width > 0 ? state.width : ''; // eslint-disable-line no-magic-numbers
}

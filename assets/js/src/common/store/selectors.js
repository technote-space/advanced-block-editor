/**
 * @param {object} state state
 * @param {string} name name
 * @returns {boolean} active state
 */
export function isActive( state, name ) {
	return name in state.preferences && !! state.preferences[ name ];
}

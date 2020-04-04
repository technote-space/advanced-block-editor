/**
 * @param {object} state state
 * @param {string} name name
 * @returns {boolean} active state
 */
export const isActive = (state, name) => name in state.preferences && !!state.preferences[ name ];

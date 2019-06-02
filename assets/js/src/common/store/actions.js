import { SET_ACTIVE, RESET_STATE } from './constant';

/**
 * @param {string} name name
 * @param {boolean} isActive active state
 * @returns {{isActive: boolean, name: string, type: string}} action
 */
export const setActive = ( name, isActive ) => ( {
	type: SET_ACTIVE,
	name,
	isActive,
} );

/**
 * @returns {{type: string}} action
 */
export const resetState = () => ( {
	type: RESET_STATE,
} );
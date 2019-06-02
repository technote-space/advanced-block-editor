import { INITIALIZE, SET_WIDTH } from './constant';

/**
 * @returns {{type}} action
 */
export const initialize = () => ( {
	type: INITIALIZE,
} );

/**
 * @param {number} width width
 * @returns {{width: *, type}} action
 */
export const setWidth = width => ( {
	type: SET_WIDTH,
	width,
} );

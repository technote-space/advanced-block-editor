import { INITIALIZE, SET_WIDTH } from './constant';

/**
 * @returns {{type}} action
 */
export function initialize() {
	return {
		type: INITIALIZE,
	};
}

/**
 * @param {number} width width
 * @returns {{width: *, type}} action
 */
export function setWidth( width ) {
	return {
		type: SET_WIDTH,
		width,
	};
}

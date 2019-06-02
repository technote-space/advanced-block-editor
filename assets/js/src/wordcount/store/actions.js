import { INITIALIZE, SET_WORD_COUNT_TYPE } from './constant';

/**
 * @returns {{type}} action
 */
export const initialize = () => ( {
	type: INITIALIZE,
} );

/**
 * @param {string} wordCountType wordCountType
 * @returns {{width: *, type}} action
 */
export const setType = wordCountType => ( {
	type: SET_WORD_COUNT_TYPE,
	wordCountType,
} );

import { PLUGIN_NAME } from '../../constant';

export const STORE_NAME = `${ PLUGIN_NAME }/wordcount`;
export const INITIALIZE = `@@${ STORE_NAME }/INITIALIZE`;
export const SET_WORD_COUNT_TYPE = `@@${ STORE_NAME }/SET_WORD_COUNT_TYPE`;

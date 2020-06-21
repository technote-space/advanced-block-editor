import { INITIALIZE, SET_WORD_COUNT_TYPE } from './constant';
import { WORD_COUNT_TYPES } from '../constant';

export default (state = {
  preferences: {},
}, action) => {
  switch (action.type) {
    case INITIALIZE: {
      const newState                     = Object.assign({}, state);
      newState.preferences.wordCountType = null;
      return newState;
    }
    case SET_WORD_COUNT_TYPE:
      if (action.wordCountType === '' || Object.keys(WORD_COUNT_TYPES).includes(action.wordCountType)) {
        const newState                     = Object.assign({}, state);
        newState.preferences               = Object.assign({}, state.preferences);
        newState.preferences.wordCountType = action.wordCountType === '' ? null : action.wordCountType;
        return newState;
      }
      break;
    default:
      break;
  }
  return state;
};

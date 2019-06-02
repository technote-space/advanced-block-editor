import { SET_ACTIVE, RESET_STATE } from './constant';
import { MODULES } from '../../constant';

const getDefault = () => Object.assign( ...Object.keys( MODULES ).filter( key => MODULES[ key ].default ).map( key => ( { [ key ]: true } ) ) );

export default ( state = {
	preferences: getDefault(),
}, action ) => {
	switch ( action.type ) {
		case SET_ACTIVE: {
			const newState = {};
			newState.preferences = Object.assign( {}, state.preferences );
			newState.preferences[ action.name ] = action.isActive;
			return newState;
		}
		case RESET_STATE:
			return {
				preferences: getDefault(),
			};
		default:
			break;
	}
	return state;
};

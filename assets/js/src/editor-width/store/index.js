const { registerStore } = wp.data;
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import { STORE_NAME } from './constant';

registerStore( STORE_NAME, { reducer, selectors, actions, persist: [ 'width' ] } );
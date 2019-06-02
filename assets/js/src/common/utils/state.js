const { select, dispatch } = wp.data;

import { STORE_NAME } from '../store/constant';

export const isModuleActive = name => select( STORE_NAME ).isActive( name );
export const setModuleActive = name => state => dispatch( STORE_NAME ).setActive( name, state );
export const toggleModuleActive = name => () => setModuleActive( name )( ! isModuleActive( name ) );
export const onModuleActive = name => () => setModuleActive( name )( true );
export const offModuleActive = name => () => setModuleActive( name )( false );

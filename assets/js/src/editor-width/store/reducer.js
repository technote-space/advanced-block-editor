import { INITIALIZE, SET_WIDTH } from './constant';

export default ( state = {
	width: false,
}, action ) => {
	switch ( action.type ) {
		case INITIALIZE:
			if ( state.width ) {
				setStyle( state.width );
			}
			break;
		case SET_WIDTH:
			if ( /^\d+$/.test( action.width ) ) {
				const newState = Object.assign( {}, state );
				newState.width = action.width;
				setStyle( action.width );
				return newState;
			}
			break;
		default:
			break;
	}
	return state;
};

/**
 * @param {number} width width
 */
function setStyle( width ) {
	const remove = document.getElementById( 'set-editor-width' );
	if ( remove ) {
		remove.remove();
	}

	const styleSheetElement = document.createElement( 'style' );
	styleSheetElement.id = 'set-editor-width';
	document.head.appendChild( styleSheetElement );
	const sheet = styleSheetElement.sheet;

	const styles = getStyles( width );
	Object.keys( styles ).forEach( selector => {
		const style = styles[ selector ];
		if ( sheet.insertRule ) {
			sheet.insertRule( `#editor ${ selector }` + '{' + style + '}', sheet.cssRules.length );
		} else {
			sheet.addRule( `#editor ${ selector }`, style );
		}
	} );
}

/**
 * @param {number} width width
 * @returns {{'.editor-writing-flow': string, '.wp-block': string}} styles
 */
function getStyles( width ) {
	return {
		'.editor-writing-flow': `max-width: ${ width }px; width: auto; margin: auto`,
		'.wp-block': 'max-width: 100%; margin: 0 auto; padding: 0;',
	};
}

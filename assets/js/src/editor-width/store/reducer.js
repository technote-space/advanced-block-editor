import { INITIALIZE, SET_WIDTH } from './constant';
import { isActive } from '../utils';

export default (state = {
	preferences: {},
}, action) => {
	switch (action.type) {
		case INITIALIZE:
			setStyle(state.preferences.width);
			break;
		case SET_WIDTH:
			if (/^\d*$/.test(action.width)) {
				const newState             = Object.assign({}, state);
				newState.preferences       = Object.assign({}, state.preferences);
				newState.preferences.width = Number(action.width);
				setStyle(newState.preferences.width);
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
const setStyle = width => {
	console.log(document.querySelectorAll('.set-editor-width'));
	document.querySelectorAll('.set-editor-width').forEach(elem => elem.remove());
	if (!isActive() || !width || width <= 0) { // eslint-disable-line no-magic-numbers
		return;
	}

	const styles = getStyles(width);
	Object.keys(styles).forEach(media => {
		const styleSheetElement     = document.createElement('style');
		styleSheetElement.className = 'set-editor-width';
		document.head.appendChild(styleSheetElement);
		const sheet = styleSheetElement.sheet;

		const item = styles[ media ];
		if (media && media !== '*') {
			styleSheetElement.setAttribute('media', media);
		}

		Object.keys(item).forEach(selector => {
			if (sheet.insertRule) {
				sheet.insertRule(`#editor ${selector}` + '{' + item[ selector ] + '}', sheet.cssRules.length);
			} else {
				sheet.addRule(`#editor ${selector}`, item[ selector ]);
			}
		});
	});
};

/**
 * @param {number} width width
 * @returns {object} styles
 */
const getStyles = width => ({
	'*': {
		'.wp-block': `max-width: ${width}px; margin-left: auto; margin-right: auto; padding: 0;`,
		'.wp-block[data-align="full"]': 'max-width: none; margin-left: -14px; margin-right: -14px;',
	},
	'(min-width: 600px)': {
		'.wp-block[data-align="full"]': 'max-width: none; margin-left: -58px; margin-right: -58px;',
	},
});

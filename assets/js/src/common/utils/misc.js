const { subscribe } = wp.data;
import { PLUGIN_NAME } from '../../constant';

/**
 * @param {string} name name
 * @returns {string} plugin name
 */
export const getPluginName = name => `${ PLUGIN_NAME }--${ name }`;

/**
 * @param {function} selector selector
 * @param {function} listener listener
 */
export const addSubscribe = ( selector, listener ) => {
	let previousValue = selector();
	subscribe( function() {
		const selectedValue = selector();
		if ( selectedValue !== previousValue ) {
			previousValue = selectedValue;
			listener( selectedValue );
		}
	} );
};
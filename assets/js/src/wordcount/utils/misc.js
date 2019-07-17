import { WORD_COUNT_TYPES } from '../constant';
import { translate } from '../../common/utils';

export const getWordCountTypes = () => [
	{
		label: translate( 'Default' ),
		value: '',
	},
].concat( Object.keys( WORD_COUNT_TYPES ).map( type => ( {
	label: translate( WORD_COUNT_TYPES[ type ] ),
	value: type,
} ) ) );

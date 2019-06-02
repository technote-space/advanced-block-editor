import { WORD_COUNT_TYPES } from '../constant';
import { translate } from '../../common/utils';

export const getWordCountTypes = () => [
	{
		label: translate( 'default' ),
		value: '',
	},
].concat( WORD_COUNT_TYPES.map( type => ( {
	label: type,
	value: type,
} ) ) );

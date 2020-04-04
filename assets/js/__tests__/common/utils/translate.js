import { translate } from '../../../src/common/utils';

describe('translate test', () => {
	it('should translate if data exists', () => {
		expect(translate('test')).toBe('テスト');
	});
	it('should not translate if data not exists', () => {
		expect(translate('test2')).toBe('test2');
	});
});

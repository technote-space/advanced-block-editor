import { dispatch } from '@wordpress/data';
import { STORE_NAME } from '../../../src/common/store';
import { isModuleActive, setModuleActive, toggleModuleActive, onModuleActive, offModuleActive } from '../../../src/common/utils';

describe('isModuleActive, setModuleActive test', () => {
	it('should false if not exists', () => {
		expect(isModuleActive('test')).toBeFalse();
	});

	it('should false if not active', () => {
		setModuleActive('test1')(false);
		expect(isModuleActive('test1')).toBeFalse();
	});

	it('should true if active', () => {
		setModuleActive('test2')(true);
		expect(isModuleActive('test2')).toBeTrue();
	});

	it('should toggle', () => {
		toggleModuleActive('test1')();
		toggleModuleActive('test2')();
		expect(isModuleActive('test1')).toBeTrue();
		expect(isModuleActive('test2')).toBeFalse();
	});

	it('should on active', () => {
		onModuleActive('test2')();
		expect(isModuleActive('test2')).toBeTrue();
	});

	it('should off active', () => {
		offModuleActive('test2')();
		expect(isModuleActive('test2')).toBeFalse();
	});

	it('should reset', () => {
		onModuleActive('test1')();
		onModuleActive('test2')();

		dispatch(STORE_NAME).resetState();
		expect(isModuleActive('test1')).toBeFalse();
		expect(isModuleActive('test2')).toBeFalse();
	});
});

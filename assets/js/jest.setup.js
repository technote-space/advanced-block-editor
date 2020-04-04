import { setupGlobal } from '@technote-space/gutenberg-test-helper';

setupGlobal({
	setUseRefMock: false,
	mockLodashDebounce: false,
	globalParams: {
		abeParams: {
			translate: {
				test: 'テスト',
			},
		},
	},
	setWp: {
		formatLibrary: false,
	},
});

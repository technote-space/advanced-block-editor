const SpeedMeasurePlugin            = require('speed-measure-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const HardSource                    = require('hard-source-webpack-plugin');
const smp                           = new SpeedMeasurePlugin();
const webpack                       = require('webpack');
const pkg                           = require('./package');
const path                          = require('path');

const banner    = `${pkg.name} ${pkg.version}\nCopyright (c) ${new Date().getFullYear()} ${pkg.author.name}\nLicense: ${pkg.license}`;
const externals = {
	'@wordpress/components': 'window.wp.components',
	'@wordpress/compose': 'window.wp.compose',
	'@wordpress/data': 'window.wp.data',
	'@wordpress/dom-ready': 'window.wp.domReady',
	'@wordpress/edit-post': 'window.wp.editPost',
	'@wordpress/element': 'window.wp.element',
	'@wordpress/i18n': 'window.wp.i18n',
	'@wordpress/plugins': 'window.wp.plugins',
	'@wordpress/wordcount': 'window.wp.wordcount',
	lodash: 'lodash',
};

const webpackConfig = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'index.min.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	externals,
	plugins: [
		new webpack.BannerPlugin(banner),
		new DuplicatePackageCheckerPlugin(),
		new HardSource(),
	],
};

module.exports = smp.wrap(webpackConfig);

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: ['css-loader', 'postcss-loader', 'sass-loader'],
					publicPath: './dist'
				})
			},
		],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules$/,
				query: {
					preset: ['es2015']
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    template: 'src/index.html',
		    chunks: ['main']
		}),
		new ExtractTextPlugin({
			filename: 'apps.css',
			disabled: false,
			allChunks: true
		})
	],
	devtool: 'source-map'
}
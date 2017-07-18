var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output:{
		filename: 'public/build/bundle.js'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude : /{node_modules}/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
					plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
				}

			}
		]
	}

}
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
            'style-loader', // Creates 'style' nodes from JS strings
            'css-loader', // Translates CSS into CommonJS
            'sass-loader', // Compiles Sass to CSS
          ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

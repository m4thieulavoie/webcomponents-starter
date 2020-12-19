const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    mode: 'production', 
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html' 
      })
    ],
  };
};
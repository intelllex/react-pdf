module.exports = require('babel-jest').createTransformer({
  presets: ['@babel/env', '@babel/react'],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ] 
});

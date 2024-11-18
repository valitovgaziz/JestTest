const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        finename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};   
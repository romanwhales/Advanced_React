const path = require('path');


const config = {
    entry: ['babel-polyfill','./lib/components/Index.js'],
    output:{
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
          path.join(__dirname, "src"),
          "node_modules"
        ]
       },
    module:{
        rules: [
            {test: /\.js$/,exclude: /node_modules/,use: 'babel-loader'}
        ]
    }
}

module.exports = config
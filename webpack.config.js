const path = require('path');

module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'react-hot-loader' },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }
        ]
    },

    devtool: 'cheap-eval-source-map',
    
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};
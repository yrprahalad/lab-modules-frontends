import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push(
    {
        test: /\.(scss)$/, // all scss files will be handled
        // Use loaders in that specific reverse order
        use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
        ]
    },
    {
        test: /\.(png|svg|jpe?g|gif|webm)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[hash]-[name].[ext]',
                    outputPath: 'static',
                    publicPath: '../static',
                },
            },
        ],
    }
);

export const rendererConfig: Configuration = {
    module: {
        rules,
    },
    plugins,
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss', '.sass'],
    },
};

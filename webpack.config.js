const path = require('path');
const outputFolder = 'docs';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackEsmodulesPlugin = require('./webpack/html-webpack-esmodules-plugin');

const removeNumericProperties = require('./src/custom-loader-testing/remove-numeric-properties');

const configurePlugins = () => {
  return [
    new CleanWebpackPlugin([outputFolder]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Worldwide News',
      template: './src/index.html',
      favicon: './src/favicon/favicon-16x16.png',
      hash: true,
    }),
    new HtmlWebpackEsmodulesPlugin(),
  ];
};

const configureBabelLoader = ({ browsers, useBuiltIns = false }) => {
  return {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [
          ['@babel/preset-env', {
            // debug: true,
            modules: false,
            useBuiltIns,
            targets: {
              browsers,
            },
          }],
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          "@babel/plugin-syntax-dynamic-import",
        ],
      },
    },
  };
};

const configureStylesLoader = isProd => {
  return {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ]
  }
}

const configureImageLoader = isProd => ({
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        disable: !isProd,
        optipng: {
          enabled: true,
        },
      },
    },
  ]
});

const configureCustomJsonLoader = isProd => ({
  test: /custom-loader-test\.json$/,
  use: [
    {
      loader: 'json-transform-loader',
      options: {
        transformFn: removeNumericProperties,
      },
    },
  ]
});

const getBaseConfig = isProd => ({
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'none' : 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, outputFolder),
  },
  optimization: {
    runtimeChunk: true,
  }
});

const getModernConfig = isProd => ({
  ...getBaseConfig(isProd),
  entry: './src/app/main.js',
  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: '[name].[chunkhash:8].m.js',
    chunkFilename: '[name].[chunkhash:8].m.js',
  },
  plugins: configurePlugins(),
  module: {
    rules: [
      configureBabelLoader({
        browsers: [
          // The last two versions of each browser, excluding versions
          // that don't support <script type="module">.
          'last 2 Chrome versions', 'not Chrome < 60',
          'last 2 Safari versions', 'not Safari < 10.1',
          'last 2 iOS versions', 'not iOS < 10.3',
          'last 2 Firefox versions', 'not Firefox < 54',
          'last 2 Edge versions', 'not Edge < 15',
        ]
      }),
      configureStylesLoader(isProd),
      configureImageLoader(isProd),
      configureCustomJsonLoader(isProd),
    ],
  },
});

const getLegacyConfig = isProd => ({
  ...getBaseConfig(isProd),
  entry: ['./src/app/polyfills.js', './src/app/main.js'],
  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
  },
  plugins: configurePlugins(),
  module: {
    rules: [
      configureBabelLoader({
        browsers: [
          '> 1%',
          'last 2 versions',
          'Firefox ESR',
        ],
        useBuiltIns: 'usage',
      }),
      configureStylesLoader(isProd),
      configureImageLoader(isProd),
      // configureCustomJsonLoader(isProd),
    ],
  },
});

module.exports = (env, argv) => {
  const isProd = env === 'production';
  if (isProd) {
    // setting the node env to be used by postcss.config
    process.env.NODE_ENV = 'production';
  }

  console.log({ isProd });

  return [
    getLegacyConfig(isProd),
    getModernConfig(isProd),
  ];
}

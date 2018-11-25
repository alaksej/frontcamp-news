const path = require('path');
const outputFolder = 'docs';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const configurePlugins = () => {
  return [
    new CleanWebpackPlugin([outputFolder]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'Worldwide News',
      template: './src/index.html',
      favicon: './src/favicon/favicon-16x16.png',
      hash: true,
    }),
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
      // TODO: load common styles as a bundle,
      // component-specific - on demand (with style-loader)
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
})

const getBaseConfig = isProd => ({
  mode: isProd ? 'production' : 'development',
  entry: {
    polyfills: './src/app/polyfills.js',
    main: './src/app/main.js',
  },
  devServer: {
    contentBase: path.join(__dirname, outputFolder),
  },
});

const getModernConfig = isProd => ({
  ...getBaseConfig(isProd),
  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: '[name].bundle.es6.js',
    chunkFilename: '[name].bundle.es6.js',
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
    ],
  },
});

const getLegacyConfig = isProd => ({
  ...getBaseConfig(isProd),
  output: {
    path: path.resolve(__dirname, outputFolder),
    filename: '[name].bundle.es5.js',
    chunkFilename: '[name].bundle.es5.js',
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
    getModernConfig(isProd),
    getLegacyConfig(isProd),
  ];
}

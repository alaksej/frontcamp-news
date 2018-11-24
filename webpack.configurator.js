const path = require('path');
const isProd = process.env.NODE_ENV === 'production';

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configurePlugins = () => {
  return [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: 'Worldwide News',
      template: './src/index.html',
    }),
  ];
};

const configureBabelLoader = (browserlist) => {
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
            useBuiltIns: 'usage',
            targets: {
              browsers: browserlist,
            },
          }],
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
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
      !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
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
    main: './src/js/main.js',
    newslist: './src/js/components/news-list.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
  },
});

const getModernConfig = isProd => ({
  ...getBaseConfig(isProd),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].bundle.es6.js',
  },
  plugins: configurePlugins(),
  module: {
    rules: [
      configureBabelLoader([
        // The last two versions of each browser, excluding versions
        // that don't support <script type="module">.
        'last 2 Chrome versions', 'not Chrome < 60',
        'last 2 Safari versions', 'not Safari < 10.1',
        'last 2 iOS versions', 'not iOS < 10.3',
        'last 2 Firefox versions', 'not Firefox < 54',
        'last 2 Edge versions', 'not Edge < 15',
      ]),
      configureStylesLoader(isProd),
      configureImageLoader(isProd),
    ],
  },
});

const getLegacyConfig = isProd => ({
  ...getBaseConfig(isProd),
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].bundle.es5.js',
  },
  plugins: configurePlugins(),
  module: {
    rules: [
      configureBabelLoader([
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ]),
      configureStylesLoader(isProd),
      configureImageLoader(isProd),
    ],
  },
});

module.exports = {
  getModernConfig: () => getModernConfig(isProd),
  getLegacyConfig: () => getLegacyConfig(isProd),
}

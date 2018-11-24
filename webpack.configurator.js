const path = require('path');

const configurePlugins = () => {
  const plugins = [
  ];

  return plugins;
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
            debug: true,
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

const baseConfig = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    'main': './src/js/main.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
  },
};

const modernConfig = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/bundle.es6.js',
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
    ],
  },
};

const legacyConfig = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/bundle.es5.js',
  },
  plugins: configurePlugins(),
  module: {
    rules: [
      configureBabelLoader([
        '> 1%',
        'last 2 versions',
        'Firefox ESR',
      ]),
    ],
  },
};

module.exports = {
  modernConfig,
  legacyConfig,
}

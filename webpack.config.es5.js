const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./docs/js/main.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "js/bundle.es5.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: [
                      '> 1%',
                      'last 2 versions',
                      'Firefox ESR',
                    ],
                  }
                }
              ]
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
  }
};
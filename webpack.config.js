const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Custom plugin to handle CommonJS exports
class CommonJSExportsPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("CommonJSExportsPlugin", (compilation) => {
      compilation.hooks.buildModule.tap("CommonJSExportsPlugin", (module) => {
        if (module.resource && module.resource.includes("@react-navigation")) {
          const originalSource = module.source;
          module.source = function () {
            const source = originalSource.call(this);
            if (source && source._value) {
              // Inject CommonJS globals at the beginning of the module
              source._value = `
                (function() {
                  if (typeof exports === 'undefined') {
                    var exports = {};
                  }
                  if (typeof module === 'undefined') {
                    var module = { exports: exports };
                  }
                  if (typeof require === 'undefined') {
                    var require = function() { return {}; };
                  }
                  ${source._value}
                })();
              `;
            }
            return source;
          };
        }
      });
    });
  }
}

module.exports = {
  entry: "./index.web.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: /node_modules\/@react-navigation\/(native|stack)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: "commonjs",
                  targets: {
                    browsers: ["last 2 versions", "ie >= 11"],
                  },
                },
              ],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              "@babel/plugin-transform-modules-commonjs",
              "@babel/plugin-transform-runtime",
            ],
          },
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: /node_modules\/@react-native-masked-view/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          },
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include:
          /node_modules\/(react-native-screens|react-native-safe-area-context|react-native-gesture-handler)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          },
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: /node_modules\/react-native-linear-gradient/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-flow",
            ],
            plugins: [
              "@babel/plugin-transform-modules-commonjs",
              "@babel/plugin-transform-flow-strip-types",
            ],
          },
        },
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              native: false,
              web: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false,
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/images/[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/fonts/[name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      ".web.js",
      ".js",
      ".web.ts",
      ".ts",
      ".web.tsx",
      ".tsx",
      ".json",
    ],
    alias: {
      "react-native$": "react-native-web",
      "@react-navigation/native": path.resolve(
        __dirname,
        "src/mocks/ReactNavigationNative.js"
      ),
      "@react-navigation/stack": path.resolve(
        __dirname,
        "src/mocks/ReactNavigationStack.js"
      ),
      "@react-navigation/elements": path.resolve(
        __dirname,
        "src/mocks/ReactNavigationElements.js"
      ),
      "@react-native-masked-view/masked-view": path.resolve(
        __dirname,
        "src/mocks/MaskedView.js"
      ),
      "react-native-screens": path.resolve(
        __dirname,
        "node_modules/react-native-screens/lib/commonjs"
      ),
      "react-native-safe-area-context": path.resolve(
        __dirname,
        "node_modules/react-native-safe-area-context/lib/commonjs"
      ),
      "react-native-gesture-handler": path.resolve(
        __dirname,
        "node_modules/react-native-gesture-handler/lib/commonjs"
      ),
      "react-native-linear-gradient": path.resolve(
        __dirname,
        "src/mocks/LinearGradient.tsx"
      ),
      "react-native-linear-gradient/index": path.resolve(
        __dirname,
        "src/mocks/LinearGradient.tsx"
      ),
      "react-native-linear-gradient/index.ios": path.resolve(
        __dirname,
        "src/mocks/LinearGradient.tsx"
      ),
      "react-native-linear-gradient/index.android": path.resolve(
        __dirname,
        "src/mocks/LinearGradient.tsx"
      ),
    },
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      util: require.resolve("util"),
      assert: require.resolve("assert"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      url: require.resolve("url"),
      fs: false,
      path: require.resolve("path-browserify"),
      net: false,
      tls: false,
      child_process: false,
      process: require.resolve("process/browser.js"),
    },
    fullySpecified: false,
    mainFields: ["browser", "module", "main"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: true,
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
      "process.env": JSON.stringify(process.env),
      global: "globalThis",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser.js",
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.NormalModuleReplacementPlugin(
      /^\.\.\/MaskedView$/,
      path.resolve(__dirname, "src/mocks/MaskedView.js")
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^@react-navigation\/elements$/,
      path.resolve(__dirname, "src/mocks/ReactNavigationElements.js")
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^@react-navigation\/native$/,
      path.resolve(__dirname, "src/mocks/ReactNavigationNative.js")
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^@react-navigation\/stack$/,
      path.resolve(__dirname, "src/mocks/ReactNavigationStack.js")
    ),
    new webpack.NormalModuleReplacementPlugin(
      /^react-native-linear-gradient(\/.*)?$/,
      path.resolve(__dirname, "src/mocks/LinearGradient.tsx")
    ),
    new CommonJSExportsPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public/assets/fonts",
          to: "assets/fonts",
        },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3002,
    hot: true,
    open: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
        common: {
          name: "common",
          minChunks: 2,
          chunks: "all",
          enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: "runtime",
    },
  },
};

const path = require('path');
const mkdirp = require('mkdirp');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DirectoryTreePlugin = require('directory-tree-webpack-plugin');

// Create dist folder
mkdirp.sync('dist');

module.exports = {
  entry: './index.js',
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          }
        }]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf|md)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    disableHostCheck: true
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
          { from: '../../node_modules/graphql-voyager/dist/voyager.worker.js' , to: path.resolve(__dirname, 'dist')},
          { from: path.resolve(__dirname, 'site/guides/home.md') , to: path.resolve(__dirname, 'dist')}
      ]
    }),
    new DirectoryTreePlugin({
      dir: './site/guides',
      path: 'dist/guides.json',
      extensions: /\.md/
    })
  ]
};

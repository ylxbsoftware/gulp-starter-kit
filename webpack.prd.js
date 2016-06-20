var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      path.resolve('./app/index/index.js')
    ],
    internal: [
      path.resolve('./app/internal/index.js')
    ],
    sale: [
      path.resolve('./app/sale/index.js')
    ],
    rent: [
      path.resolve('./app/rent/index.js')
    ],
    office: [
      path.resolve('./app/office/index.js')
    ],
    error: [
      path.resolve('./app/error/index.js')
    ],
    appointment: [
      path.resolve('./app/appointment/index.js')
    ],
    houseExpert: [
      path.resolve('./app/house-expert/index.js')
    ],
    clientEntrust: [
      path.resolve('./app/client-entrust/index.js')
    ],
    personalInformation: [
      path.resolve('./app/personal-information/index.js')
    ],
    information: [
      path.resolve('./app/information/index.js')
    ],
    goodNews: [
      path.resolve('./app/good-news/index.js')
    ],
    portProtocol: [
      path.resolve('./app/port-protocol/index.js')
    ],
    informationDetails: [
      path.resolve('./app/information-details/index.js')
    ],
    myWallet: [
      path.resolve('./app/my-wallet/index.js')
    ],
    activeRecord: [
      path.resolve('./app/active-record/index.js')
    ],
    changePassword: [
      path.resolve('./app/change-password/index.js')
    ],
    completeData: [
      path.resolve('./app/complete-data/index.js')
    ],
    pubsale: [
      path.resolve('./app/pub-sale/index.js')
    ],
    pubrent: [
      path.resolve('./app/pub-rent/index.js')
    ],
    puboffice: [
      path.resolve('./app/pub-office/index.js')
    ],
    pubsuccess: [
      path.resolve('./app/pub-success/index.js')
    ],
    joinsuccess: [
      path.resolve('./app/join-success/index.js')
    ],
    internalsale: [
      path.resolve('./app/internal-sale/index.js')
    ],
    internalrent: [
      path.resolve('./app/internal-rent/index.js')
    ],
    internaOfficelrent: [
      path.resolve('./app/internal-rent-office/index.js')
    ],
    internaOfficelsale: [
      path.resolve('./app/internal-sale-office/index.js')
    ],
    selfcheck: [
      path.resolve('./app/selfcheck/index.js')
    ],
    statistics: [
      path.resolve('./app/statistics/index.js')
    ],
    selfcheckRanking: [
      path.resolve('./app/selfcheck-ranking/index.js')
    ],
    grabexposure: [
      path.resolve('./app/grab-exposure/index.js')
    ],
    mass: [
      path.resolve('./app/mass/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js',
    publicPath: '/assets/js/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'dot-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css?singleton'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url?limit=15000'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/font-woff2'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=1&mimetype=image/svg+xml'
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'app', 'assets']
  },
  externals: {
    jquery: 'jQuery'
  }
};

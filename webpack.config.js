var path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  devtool: 'source-map',
  entry: {
    index: [
      'webpack/hot/dev-server',
      path.resolve('./app/index/index.js')
    ],
    internal: [
      'webpack/hot/dev-server',
      path.resolve('./app/internal/index.js')
    ],
    test: [
      'webpack/hot/dev-server',
      path.resolve('./app/test/index.js')
    ],
    sale: [
      'webpack/hot/dev-server',
      path.resolve('./app/sale/index.js')
    ],
    rent: [
      'webpack/hot/dev-server',
      path.resolve('./app/rent/index.js')
    ],
    office: [
      'webpack/hot/dev-server',
      path.resolve('./app/office/index.js')
    ],
    error: [
      'webpack/hot/dev-server',
      path.resolve('./app/error/index.js')
    ],
    appointment: [
      'webpack/hot/dev-server',
      path.resolve('./app/appointment/index.js')
    ],
    houseExpert: [
      'webpack/hot/dev-server',
      path.resolve('./app/house-expert/index.js')
    ],
    clientEntrust: [
      'webpack/hot/dev-server',
      path.resolve('./app/client-entrust/index.js')
    ],
    personalInformation: [
      'webpack/hot/dev-server',
      path.resolve('./app/personal-information/index.js')
    ],
    information: [
      'webpack/hot/dev-server',
      path.resolve('./app/information/index.js')
    ],
    portProtocol: [
      'webpack/hot/dev-server',
      path.resolve('./app/port-protocol/index.js')
    ],
    goodNews: [
      'webpack/hot/dev-server',
      path.resolve('./app/good-news/index.js')
    ],
    informationDetails: [
      'webpack/hot/dev-server',
      path.resolve('./app/information-details/index.js')
    ],
    myWallet: [
      'webpack/hot/dev-server',
      path.resolve('./app/my-wallet/index.js')
    ],
    activeRecord: [
      'webpack/hot/dev-server',
      path.resolve('./app/active-record/index.js')
    ],
    changePassword: [
      'webpack/hot/dev-server',
      path.resolve('./app/change-password/index.js')
    ],
    completeData: [
      'webpack/hot/dev-server',
      path.resolve('./app/complete-data/index.js')
    ],
    pubsale: [
      'webpack/hot/dev-server',
      path.resolve('./app/pub-sale/index.js')
    ],
    pubrent: [
      'webpack/hot/dev-server',
      path.resolve('./app/pub-rent/index.js')
    ],
    puboffice: [
      'webpack/hot/dev-server',
      path.resolve('./app/pub-office/index.js')
    ],
    pubsuccess: [
      'webpack/hot/dev-server',
      path.resolve('./app/pub-success/index.js')
    ],
    joinsuccess: [
      'webpack/hot/dev-server',
      path.resolve('./app/join-success/index.js')
    ],
    internalsale: [
      'webpack/hot/dev-server',
      path.resolve('./app/internal-sale/index.js')
    ],
    internalrent: [
      'webpack/hot/dev-server',
      path.resolve('./app/internal-rent/index.js')
    ],
    internaOfficelrent: [
      path.resolve('./app/internal-rent-office/index.js')
    ],
    internaOfficelsale: [
      path.resolve('./app/internal-sale-office/index.js')
    ],
    selfcheck: [
      'webpack/hot/dev-server',
      path.resolve('./app/selfcheck/index.js')
    ],
    statistics: [
      'webpack/hot/dev-server',
      path.resolve('./app/statistics/index.js')
    ],
    selfcheckRanking: [
      'webpack/hot/dev-server',
      path.resolve('./app/selfcheck-ranking/index.js')
    ],
    grabexposure: [
      'webpack/hot/dev-server',
      path.resolve('./app/grab-exposure/index.js')
    ],
    mass: [
      'webpack/hot/dev-server',
      path.resolve('./app/mass/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js',
    publicPath: '/assets/js/'
  },
  plugins: [commonsPlugin],

  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: 'jquery'
  //   })
  // ]

  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'dot-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css'
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

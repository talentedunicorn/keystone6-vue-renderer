module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/preview/': '/',
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].template = './index.html'
        return args;
      })
  }
}

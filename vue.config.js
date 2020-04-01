// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  configureWebpack: function (config) {
    console.log('config', config)
    // if (process.env.NODE_ENV === 'production') {
    //   return config
    // }
    config.entry = {
      app: [path.join(__dirname, './examples/main.ts')]
    }
    return {
      resolve: {
        alias: {
          '@exp': path.resolve(__dirname, './examples')
        }
      }
    }
  }
}

const { resolve } = require('path')

module.exports = function (options) {
  // Register the plugin
  this.nuxt.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'plugin.js',
    options
  })

  // Extend Nuxt components
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: resolve(__dirname, 'components'),
      prefix: 'woosmap'
    })
  })
}

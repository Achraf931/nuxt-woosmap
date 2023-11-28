const { resolve } = require('path')

module.exports = async function (options) {
  // Register the plugin
  this.addPlugin({
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

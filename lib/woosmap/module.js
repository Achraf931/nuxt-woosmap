const { resolve } = require('path')

module.exports = function (options) {
  // Ajouter le plugin
  this.options.plugins.push({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'woosmap.js',
    options
  })
}

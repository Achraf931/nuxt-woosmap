const { resolve } = require('path')

module.exports = function (options) {
  // Ajouter le plugin
  this.options.plugins.push({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'woosmap.js',
    options
  })
  
  const runtimeDir = resolve(__dirname, 'components')
  
  // Ajouter le composant Woosmap aux composants Nuxt
  this.options.components.push({
    path: resolve(runtimeDir, 'Woosmap.vue'),
    prefix: 'woosmap'
  })
}

const { resolve } = require('path');

module.exports = function (options) {
  // Ajoutez le plugin
  this.nuxt.options.plugins.push({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'woosmap.js',
    options
  })
  
  const runtimeDir = resolve(__dirname, 'components')
  
  // Ajoutez le composant Woosmap au répertoire "components" de Nuxt
  this.addTemplate({
    src: resolve(runtimeDir, 'Woosmap.vue'),
    fileName: 'woosmap.vue'
  })
}

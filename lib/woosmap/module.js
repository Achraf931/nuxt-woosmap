const { resolve } = require('path');

module.exports = function (options) {
  // Ajoutez le plugin
  this.nuxt.options.plugins.push({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'plugin.js',
    options
  })
  
  // Ajoutez le composant Woosmap au répertoire "components" de Nuxt
  this.addTemplate({
    src: resolve(__dirname, 'components', 'woosmap.vue'),
    fileName: 'woosmap.vue'
  })
}

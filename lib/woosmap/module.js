const { resolve } = require('path');

module.exports = function (options) {
  // Ajoutez le plugin
  this.nuxt.options.plugins.push({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'plugin.js',
    options: {
      apiKey: options.apiKey || process.env.WOOSMAP_API_KEY  // Utilisez la clé API fournie ou utilisez celle dans les variables d'environnement
    }
  })
  
  // Ajoutez le composant Woosmap au répertoire "components" de Nuxt
  this.addTemplate({
    src: resolve(__dirname, 'components', 'woosmap.vue'),
    fileName: 'woosmap.vue'
  })
}

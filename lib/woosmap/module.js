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
  
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: path.resolve(__dirname, 'components')
    })
  })
}

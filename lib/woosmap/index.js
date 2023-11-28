const { resolve } = require('path')

module.exports = function (options) {
  // Récupérer le chemin du module
  const moduleDir = __dirname
  
  // Ajouter le plugin
  this.addPlugin({
    src: resolve(moduleDir, 'plugin.js'),
    fileName: 'woosmap.js',
    options
  })
  
  // Répertoire des composants
  const runtimeDir = resolve(moduleDir, 'components')
  
  // Ajouter le composant Woosmap
  this.nuxt.hook('components:dirs', (dirs) => {
    dirs.push({
      path: runtimeDir,
      prefix: 'woosmap'
    })
  })
  
  // Ajouter le composant Woosmap à la compilation
  this.addTemplate({
    src: resolve(runtimeDir, 'Woosmap.vue'),
    fileName: 'woosmap.vue'
  })
}

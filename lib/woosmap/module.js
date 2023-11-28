// lib/woosmap/module.js
const { resolve } = require('path')

module.exports = function (options) {
  // Récupérer le chemin du module
  const moduleDir = __dirname
  
  // Ajouter le plugin
  this.options.plugins.push({
    src: resolve(moduleDir, 'plugin.js'),
    fileName: 'woosmap.js',
    options
  })
  
  const runtimeDir = resolve(moduleDir, 'components')
  
  // Ajouter le chemin des composants à la configuration de Webpack
  this.extend((config, { isDev, isClient }) => {
    config.resolve.alias['~woosmap'] = runtimeDir
  })
}

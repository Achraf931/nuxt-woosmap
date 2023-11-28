import { defineNuxtModule, addPlugin, addComponent, addImports } from '@nuxt/kit'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

export default defineNuxtModule({
  setup(options, nuxt) {
    const moduleDir = dirname(fileURLToPath(import.meta.url))
    
    addPlugin({
      src: resolve(moduleDir, 'plugin.js'),
      fileName: 'woosmap.js',
      options
    })
    
    const runtimeDir = resolve(moduleDir, 'components')
    
    addComponent({
      name: 'Woosmap',
      src: resolve(runtimeDir, 'Woosmap.vue')
    })
    
    addImports({
      name: 'Woosmap',
      from: resolve(runtimeDir, 'Woosmap.vue')
    })
  }
})

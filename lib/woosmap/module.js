// lib/woosmap/index.js
import { defineNuxtModule, addPlugin, addComponent, addImports, createResolver } from '@nuxt/kit'
import { resolve } from 'path'

export default defineNuxtModule({
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    
    addPlugin({
      src: resolve(__dirname, 'plugin.js'),
      fileName: 'woosmap.js',
      options
    })
    
    const runtimeDir = resolve(__dirname, 'components')
    
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

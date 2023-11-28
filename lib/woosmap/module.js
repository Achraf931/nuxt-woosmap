// lib/woosmap/index.js
export default function WoosmapModule(options) {
  this.addPlugin({
    src: '~/lib/woosmap/plugin.js',
    fileName: 'woosmap.js',
    options
  })
  
  this.addComponents({
    dirs: [
      {
        path: '~/lib/woosmap/components',
        prefix: 'woosmap'
      }
    ]
  })
}

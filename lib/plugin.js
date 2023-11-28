export default (ctx, inject) => {
  const loadWoosmapSDK = () => {
    return new Promise((resolve, reject) => {
      if (typeof document === 'undefined') return

      const script = document.createElement('script')
      script.src = 'https://sdk.woosmap.com/map/map.js?key=woos-f4ccee67-f6c0-377e-b05c-ccbcd777be7e&callback=initMap' // Replace with the actual SDK URL
      script.onload = resolve
      script.onerror = () => reject(new Error('Failed to load Woosmap SDK'))
      document.head.appendChild(script)
    })
  }

  inject('loadWoosmapSDK', loadWoosmapSDK)
}

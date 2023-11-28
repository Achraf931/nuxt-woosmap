// lib/woosmap/plugin.js
export default function (context, inject) {
  const loadWoosmapSDK = () => {
    return new Promise((resolve, reject) => {
      if (typeof document === 'undefined') return
      
      const script = document.createElement('script')
      script.src = `https://sdk.woosmap.com/map/map.js?key=${context.options.WOOSMAP_API_KEY}&callback=initMap`
      script.onload = resolve
      script.onerror = () => reject(new Error('Failed to load Woosmap SDK'))
      document.head.appendChild(script)
    })
  }
  
  inject('loadWoosmapSDK', loadWoosmapSDK)
}

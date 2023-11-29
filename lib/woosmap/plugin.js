// lib/woosmap/plugin.js
export default function (context, inject) {
  const loadWoosmapSDK = (apiKey) => {
    return new Promise((resolve, reject) => {
      if (typeof document === 'undefined') return
      
      const script = document.createElement('script')
      script.src = `https://sdk.woosmap.com/map/map.js?key=${apiKey}&callback=initMap`
      script.onload = resolve
      script.onerror = () => reject(new Error('Failed to load Woosmap SDK'))
      document.head.appendChild(script)
    })
  }
  
  inject('loadWoosmapSDK', loadWoosmapSDK)
}

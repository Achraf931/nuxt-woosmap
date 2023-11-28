export default function (context, inject) {
  const loadWoosmapSDK = () => {
    return new Promise((resolve, reject) => {
      if (typeof document === 'undefined') return
      
      const script = document.createElement('script')
      // Utilisez les options passées au plugin pour accéder à process.env.WOOSMAP_API_KEY
      script.src = `https://sdk.woosmap.com/map/map.js?key=${context.options.WOOSMAP_API_KEY}&callback=initMap`
      script.onload = resolve
      script.onerror = () => reject(new Error('Failed to load Woosmap SDK'))
      document.head.appendChild(script)
    })
  }
  
  inject('loadWoosmapSDK', loadWoosmapSDK)
}

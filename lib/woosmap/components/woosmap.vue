<template>
  <div ref="woosmapContainer" class="woosmap-container" />
</template>

<script>
export default {
  name: 'woosmap',
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initWoosmap()
    })
  },
  methods: {
    async initWoosmap () {
      await this.$loadWoosmapSDK()
      this.map = new woosmap.map.Map(this.$refs.woosmapContainer, this.options)
    }
  }
}
</script>

<style>
.woosmap-container {
  width: 100%;
  height: 400px; /* Adjust as needed */
}
</style>

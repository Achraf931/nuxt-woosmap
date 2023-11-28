# Nuxt Woosmap

## Introduction

This is a [Nuxt.js](https://nuxtjs.org/) module for [Woosmap](https://developers.woosmap.com/).

## Installation

To use in a project, you can run the following command to install the `nuxt-woosmap` [NPM package](https://www.npmjs.com/package/nuxt-woosmap):

```
npm i nuxt-woosmap
```

## Usage

To use this module, you need to add it to the `modules` section of your `nuxt.config.js` file:

```js
{
  modules: [
    'nuxt-woosmap'
  ]
}
```

And then, add the environment variables to your `.env` file:

```env
WOOSMAP_API_KEY=YOUR_API_KEY
```

Then, you can use it in your code like this:

```vue
<template>
  <Woosmap :options="options" />
</template>

<script lang="ts">
import { Woosmap } from "nuxt-woosmap";

export default {
  data: () => {
    return {
      options: {
        center: { lat: 51.50940214, lng: -0.133012 },
        zoom: 13
      }
    }
  },
  components: {
    Woosmap
  }
};
</script>
```

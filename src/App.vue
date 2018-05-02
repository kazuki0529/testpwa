<template>
  <div id="app">
    <router-view :bus='bus'></router-view>
  </div>
</template>

<script>
import Vue from 'vue'

const bus = new Vue()

export default {
  name: 'app',
  data () {
    return {
      bus: bus
    }
  },
  created () {
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

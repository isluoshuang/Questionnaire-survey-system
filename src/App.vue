<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script src="echarts.min.js"></script>
<script>
/**
 * description app.vue
 */
import vHeader from './components/public/header'
import $ from 'jquery'

export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style lang="scss">
@import "style/app";
</style>

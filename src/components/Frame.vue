<template id="tabs">
  <v-ons-page>
    <NaviMenu></NaviMenu>
    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :visible="true"
      :index.sync="activeIndex"
    >
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import NaviMenu from '@/components/NaviMenu'
import MyMap from '@/components/MyMap'
import Settings from '@/components/Settings'

export default {
  name: 'frame',
  props: ['bus'],
  components: {
    NaviMenu,
    MyMap
  },
  created () {
  },
  data () {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: 'ion-ios-location',
          label: 'Map',
          page: MyMap,
          props: { bus: this.bus },
          key: 'mymap'
        },
        {
          icon: 'ion-ios-settings',
          label: 'Settings',
          page: Settings,
          props: {},
          key: 'settings'
        }
      ]
    }
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

main {
  text-align: center;
  margin-top: 40px;
}
</style>

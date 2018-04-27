<template>
  <v-ons-tabbar swipeable position="auto"
    :tabs="tabs"
    :visible="true"
    :index.sync="activeIndex"
  >
  </v-ons-tabbar>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      activeIndex: 0,
      tabs: [
        {
          label: 'Map',
          page: { template: '#map', props: [] },
          props: {},
          key: 'map'
        }
      ]
    }
  }
}
</script>

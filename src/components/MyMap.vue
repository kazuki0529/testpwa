<template id="mymap">
  <v-ons-page>
    <GmapMap
    :center="{lat: 35.40, lng: 139.46}"
    :zoom="10"
    style="height: -webkit-fill-available"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="m.icon"
        :label="m.label"
        :clickable="true"
        :draggable="false"
        @click="center=m.position"
      />
    </GmapMap>
  </v-ons-page>
</template>

<script>
export default {
  name: 'mymap',
  data () {
    return {
      markers: [
        {
          label: { text: 'hogehoge', color: 'red', fontSize: '12px' },
          icon: '/static/img/icons/favicon-32x32.png',
          position: { lat: 35.40, lng: 139.46 }
        },
        { position: { lat: 35.41, lng: 139.56 } }
      ]
    }
  }
}
</script>

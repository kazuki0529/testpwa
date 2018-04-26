<template>
  <div class="mymap">
    <GmapMap
    :center="{lat: 35.40, lng: 139.46}"
    :zoom="10"
    style="width: 500px; height: 300px"
    >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="false"
      :draggable="false"
      @click="center=m.position"
    />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'mymap',
  data () {
    return {
      markers: [
        { position: { lat: 35.40, lng: 139.46 } },
        { position: { lat: 35.41, lng: 139.56 } }
      ]
    }
  }
}
</script>

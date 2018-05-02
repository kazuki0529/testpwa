<template id="mymap">
  <v-ons-page>
    <GmapMap
    :center="{lat: 35.40, lng: 139.46}"
    :zoom="10"
    style="height: -webkit-fill-available"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in locationHistories"
        :position="m.position"
        :icon="m.icon"
        :place="m.place"
        :clickable="true"
        :draggable="false"
      >
        <GmapInfoWindow
          :opened="m.infoWindow.opened"
          :options="m.infoWindow.options"
        />
      </GmapMarker>
    </GmapMap>
  </v-ons-page>
</template>

<script>
import USERLOCATION from '@/events/userlocation'
import LOCATION_HISTORIES from '@/events/locationhistories'
import {loadUserLocationAPI} from '@/apis/client/userlocation'
import { loadLocationHistoriesAPI } from '@/apis/client/strage/locationHistories'

export default {
  name: 'mymap',
  props: ['bus'],
  data () {
    return {
      locationHistories: []
    }
  },
  created () {
    this.bus.$on(USERLOCATION.CHANGED, location => {
      console.dir(USERLOCATION.CHANGED)
      console.dir(location)

      this.bus.$emit(LOCATION_HISTORIES.PUSH, location)
      return true
    })

    this.bus.$on(LOCATION_HISTORIES.CHANGED, histories => {
      console.dir(LOCATION_HISTORIES.CHANGED)
      console.table(histories)
      this.locationHistories = histories
      return true
    })

    loadLocationHistoriesAPI(this.bus)
    loadUserLocationAPI(this.bus)
  }
}
</script>

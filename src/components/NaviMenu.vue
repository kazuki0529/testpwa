<template>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button icon="ion-navicon, material: md-menu"></v-ons-toolbar-button>
    </div>
    <div class="center">{{title}}</div>
  </v-ons-toolbar>
</template>

<script>
export default {
  name: 'navimenu',
  data () {
    return {
      title: 'map kyo-do.co'
    }
  }
}
</script>

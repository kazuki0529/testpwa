<template id="settings">
	<v-ons-page>
    <v-ons-list>
      <v-ons-list-header>アカウント</v-ons-list-header>
      <v-ons-list-item modifier="chevron" tappable>
        <div class="left">
          <img class="list-item__thumbnail" src="http://placekitten.com/g/40/40">
        </div>
        <div class="center">
          <span class="list-item__title">山田 太郎</span>
          <span class="list-item__subtitle">xxxxxxxxxxx@hogehoge.com</span>
        </div>
      </v-ons-list-item>

      <v-ons-list-header>一般</v-ons-list-header>
      <v-ons-list-item>
        <div class="center">
          設定項目１
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          設定項目２
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>
      <v-ons-list-item>
        <div class="center">
          設定項目３
        </div>
        <div class="right">
          <v-ons-switch></v-ons-switch>
        </div>
      </v-ons-list-item>
    </v-ons-list>
  </v-ons-page>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
    }
  }
}
</script>
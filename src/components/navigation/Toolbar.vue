<template>
  <v-toolbar extended class="primary" dark>
    <v-toolbar-title slot="extension" class="display-2">Stock trader</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat class="yellow--text">{{ fundsString }}</v-btn>

    <v-menu offset-y>
      <v-btn primary dark slot="activator">
        Actions
        <v-icon right>expand_more</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile key="save">
          <v-list-tile-title>Save</v-list-tile-title>
        </v-list-tile>
        <v-list-tile key="load">
          <v-list-tile-title>Load</v-list-tile-title>
        </v-list-tile>
        <v-list-tile key="load">
          <v-list-tile-title>End day</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'fundsString'
      ])
    }
  }
</script>

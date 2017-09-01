<template>
  <v-app light>
    <stocks-tabs>
      <stocks-toolbar slot="toolbar"></stocks-toolbar>
      <stocks-tabs-content slot="content" v-for="item in tabs.items" :key="item.label" :id="'tab-' + item.label"></stocks-tabs-content>
    </stocks-tabs>
    <v-footer>
      <span>Alex Ng &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Toolbar from './components/navigation/Toolbar.vue'
  import Tabs from './components/navigation/Tabs.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'tabs',
        'funds'
      ])
    },
    components: {
      'stocks-toolbar': Toolbar,
      'stocks-tabs': Tabs
    },
    methods: {
      ...mapActions(['initStocks'])
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

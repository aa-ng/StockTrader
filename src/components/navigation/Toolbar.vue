<template>
  <v-toolbar extended class="primary" dark>
    <v-toolbar-title slot="extension" class="display-2">Stock trader</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat class="yellow--text">{{ funds | dollars }}</v-btn>

    <v-menu offset-y>
      <v-btn primary dark slot="activator">
        Actions
        <v-icon right>expand_more</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile key="save" @click="saveDay">
          <v-list-tile-title>Save</v-list-tile-title>
        </v-list-tile>
        <v-list-tile key="load" @click="loadDay">
          <v-list-tile-title>Load</v-list-tile-title>
        </v-list-tile>
        <v-list-tile key="endDay" @click="endDay">
          <v-list-tile-title>End day</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'funds',
        'stocks'
      ])
    },
    methods: {
      ...mapActions(['randomizeStocks']),
      ...mapMutations(['setFunds', 'setStocks']),
      endDay () {
        this.randomizeStocks()
      },
      saveDay () {
        localStorage.setItem('stock-funds', this.funds)
        localStorage.setItem('stock-stocks', JSON.stringify(this.stocks))
      },
      loadDay () {
        var funds = localStorage.getItem('stock-funds')
        var stocks = localStorage.getItem('stock-stocks')
        this.setFunds(Number.parseFloat(funds))
        this.setStocks(JSON.parse(stocks))
      }
    }
  }
</script>

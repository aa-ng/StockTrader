<template>
  <v-layout row wrap>
    <v-flex xs12 style="margin: auto;">
      <v-card>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <h3>Overview</h3>
              <p>You may save and load your data</p>
              <p>Click end day to start a new day</p>
              <b>Your funds: {{ fundsString }}</b>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
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

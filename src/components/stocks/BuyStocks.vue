<template>
  <v-card class="mb-3">
    <v-container>
      <p :style="priceStyle">${{ data.price }}</p>
      <v-layout row wrap>
        <v-flex xs12>
          <h3>{{ data.name }}</h3>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            label="amount"
            v-model="amount"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-btn class="accent" dark @click="buyStocks({stock: data, amount: amount})">Buy stocks</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        amount: 1
      }
    },
    props: {
      data: {
        type: [Object, Array]
      }
    },
    computed: {
      priceStyle () {
        return {
          position: 'absolute',
          top: 10 + 'px',
          right: 10 + 'px'
        }
      }
    },
    methods: {
      ...mapActions([
        'addStocks',
        'buyStocks'
      ])
    }
  }
</script>

<style scoped>
  button.btn {
    margin: 0;
  }
</style>

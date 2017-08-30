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
            v-model.number="amount"
            type="number"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-btn
            primary
            dark
            @click="buyStocks({stock: data, amount: amount})"
            :disabled="amount <= 0 || !Number.isInteger(amount)"
          >{{ buyButtonLabel }}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
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
    watch: {
      amount (value) {
        if (parseInt(value) < 0) {
          this.amount = 1
        }
      }
    },
    computed: {
      ...mapGetters(['funds']),
      buyButtonLabel () {
        return this.funds >= this.data.price * this.amount ? 'Buy stocks' : 'Insufficient funds'
      },
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

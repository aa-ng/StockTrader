<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="mb-3">
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <h3>{{ data.stock.name }}</h3>
              <p>You own: {{ data.amount }}</p>
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
                class="accent"
                light
                @click="sellStocks({stock: data.stock, amount: amount, quantity: data.amount})"
                :disabled="amount <= 0 || !Number.isInteger(amount)"
              >{{ sellButtonLabel }}</v-btn>
            </v-flex>
          </v-layout>
          <p :style="priceStyle">{{ data.stock.price | dollars }}</p>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        amount: 1
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
      ...mapGetters([
        'stocks'
      ]),
      priceStyle () {
        return {
          position: 'absolute',
          top: 10 + 'px',
          right: 10 + 'px'
        }
      },
      sellButtonLabel () {
        return this.amount <= this.data.amount ? 'Sell stocks' : 'Amount exceeds your quantity'
      }
    },
    methods: {
      ...mapActions([
        'sellStocks'
      ])
    },
    props: {
      data: {
        type: Object
      }
    }
  }
</script>

<style scoped>

</style>

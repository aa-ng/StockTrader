<template>
  <v-layout row wrap>
    <v-flex xs12 md6 lg4 v-for="stock in data">
    <v-card class="mb-3">
      <v-container>
        <p :style="priceStyle">${{ stock.price }}</p>
        <v-layout row wrap>
          <v-flex xs12>
            <h3>{{ stock.name }}</h3>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="amount"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn class="accent" dark>Buy stocks</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
  </v-layout>
</template>

<script>
  export default {
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
    }
  }
</script>

<style scoped>
  button.btn {
    margin: 0;
  }
</style>

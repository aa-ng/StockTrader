<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-tabs dark v-model="tabs.model">
          <v-tabs-bar slot="activators" class="secondary">
            <v-tabs-item
              v-for="item in tabs.items"
              :key="item.label"
              :href="'#' + item.label"
              ripple
            >
              {{ item.label }}
            </v-tabs-item>
            <v-tabs-slider class="primary"></v-tabs-slider>
          </v-tabs-bar>
          <slot></slot>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: {
      tabs: {
        type: Object,
        required: true
      }
    },
    methods: {
      next () {
        this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
      }
    }
  }
</script>

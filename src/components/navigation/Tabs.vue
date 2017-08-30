<template>
  <v-tabs dark fixed centered>
    <slot name="toolbar"></slot>
    <v-tabs-bar slot="activators" class="primary">
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item
        v-for="item in tabs.items"
        :key="item.label"
        :href="'#tab-' + item.label"
      >
        {{ item.label }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-content v-for="tab in tabs.items" :key="tab.label" :id="'tab-' + tab.label" :style="tabsContentStyles">
      <transition mode="out-in" name="slide" appear>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12 md6 lg4 v-for="(data, index) in tabComponentData(tab.is)" :key="index">
              <component v-if="tab.is" :is="tab.is" :data="data"></component>
            </v-flex>
          </v-layout>
        </v-container>
      </transition>
    </v-tabs-content>
  </v-tabs>
</template>

<script>
  import { mapGetters } from 'vuex'
  import BuyStocks from '../stocks/BuyStocks.vue'
  import UserStocks from '../stocks/UserStocks.vue'
  import Overview from '../Overview.vue'

  export default {
    computed: {
      ...mapGetters([
        'funds',
        'fundsString',
        'tabs',
        'companies',
        'stocks'
      ]),
      tabsContentStyles () {
        return {
          'min-height': 100 + 'vh'
        }
      }
    },
    methods: {
      tabComponentData (is) {
        if (is === 'stocks-overview') {
          return [1]
        } else if (is === 'stocks-buy-view') {
          return this.companies
        } else if (is === 'stocks-user-view') {
          return this.stocks
        }
      }
    },
    components: {
      'stocks-buy-view': BuyStocks,
      'stocks-user-view': UserStocks,
      'stocks-overview': Overview
    }
  }
</script>

<style scoped>
  div.container {
    padding: 16px 10px;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }
  .slide-move {
    transition: transform 1s;
  }
  @keyframes slide-in {
    from {
      opacity: 0;
      transition: opacity 0.5s;
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
      transition: opacity 3s;
      opacity: 0;
    }
  }
</style>

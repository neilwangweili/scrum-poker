<template>
  <div class="fullscreen">
    <div class="offline-scrum-poker bg-white text-black flex q-pa-md non-selectable">
      <div v-for="item in model.cards" v-bind:key="item.point" class="scrum-poker-card" @click="() => renderCard(item)"
           :style="{display: cardsVisible()}">
        {{ item.point }}
      </div>
      <div class="showing-card child-center"
           :style="{display: singleCardVisible(),
           'font-size': fontSize() + 'px',
           'background-color': model.current.backgroundColor,
           height: height(),
           width: width()
      }"
           @click="() => takeBackCard()">
        {{ model.current.point }}
      </div>
    </div>
    <div class="child-center">
      <q-btn class="back-menu" color="primary" label="Back to Home"></q-btn>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';
  import {useModel} from "src/utils/vue-utils";
  import {Card, Cards} from "pages/offline-card-showing/Cards";

  export default defineComponent({
    name: 'OfflineCardShowing',
    setup() {
      return {model: useModel(new Cards())};
    },
    methods: {
      renderCard: function (item: Card) {
        this.model.current = item;
        this.model.singleCardVisible = true;
      },
      takeBackCard: function () {
        this.model.singleCardVisible = false;
      },
      singleCardVisible: function () {
        return this.model.singleCardVisible ? '' : 'none';
      },
      cardsVisible: function () {
        return this.model.singleCardVisible ? 'none' : '';
      },
      height: function () {
        return document.documentElement.clientHeight * 0.85 + 'px';
      },
      width: function () {
        return document.documentElement.clientHeight * 0.85 * 0.634 + 'px';
      },
      fontSize: function () {
        if (document.documentElement.clientHeight < 350) {
          return this.model.current.fontSize * 0.4;
        }
        if (document.documentElement.clientHeight < 400) {
          return this.model.current.fontSize * 0.5;
        }
        if (document.documentElement.clientHeight < 600) {
          return this.model.current.fontSize * 0.6;
        }
        if (document.documentElement.clientHeight < 736) {
          return this.model.current.fontSize * 0.7;
        }
        if (document.documentElement.clientHeight > 1000) {
          return this.model.current.fontSize * 1.2;
        }
        return this.model.current.fontSize;
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import "src/pages/offline-card-showing/offline-card-showing";
</style>

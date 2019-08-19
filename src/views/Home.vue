<template>
  <div class="home flex flex-col h-full pl-2">
    <vue-swing @throwout="throwout" :config="config" class="h-full" ref="swingRef">
      <template v-if="showStack">
        <card
          v-for="(card, index) in cards"
          :key="card.id"
          :data="card"
          :style="{height: cardHeight + 'px', width: cardWidth - 8 + 'px'}"
        />
      </template>
    </vue-swing>

    <footer class="flex w-3/4 items-center justify-between mx-auto my-4">
      <button
        @click="swipeLeft"
        class="text-4xl bg-white hover:text-green-700 text-green-300 font-bold rounded-full w-20 h-20 overflow-hidden shadow"
      >
        <i class="far fa-thumbs-up"></i>
      </button>
      <button
        @click="swipeUp"
        class="text-2xl bg-white hover:bg-gray-700 text-gray-500 font-bold rounded-full w-16 h-16 overflow-hidden shadow"
      >
        <i class="fas fa-question"></i>
      </button>
      <button
        @click="match"
        class="text-4xl bg-white hover:text-red-700 text-red-300 font-bold rounded-full w-20 h-20 overflow-hidden shadow"
      >
        <i class="far fa-thumbs-down fa-flip-horizontal"></i>
      </button>
    </footer>
  </div>
</template>

<script>
/* eslint-disable */

// import HelloWorld from '@/components/HelloWorld.vue'
import VueSwing from "vue-swing";
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    VueSwing,
    Card
  },
  data: function() {
    return {
      matchCount: 0,
      showStack: false,
      cardHeight: 0,
      cardWidth: 0,
      config: {
        allowedDirections: [
          VueSwing.Direction.UP,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ],
        throwOutConfidence: function() {
          return 1;
        }
      },
      refCards: [],
      cards: []
    };
  },
  created() {
    // this.loadCardImages(this.cards);
    this.loadCards();
  },
  mounted() {
    this.$nextTick(() => {
      this.cardHeight = this.$refs.swingRef.$el.clientHeight;
      this.cardWidth = this.$refs.swingRef.$el.clientWidth;
    });
  },
  methods: {
    loadCards() {
      axios
        .get("/api/items")
        .then(response => {
          console.log(response.data);
          this.cards = response.data;
          this.refCards = {...this.cards};
          this.showStack = true;
        })
        .catch(e => {
          console.log(e);
        });
    },

    //throwout
    throwout() {
      this.matchCount++;

      if (this.matchCount == 3) this.match();

      setTimeout(() => {
        this.cards.pop();
      }, 100);
    },
    //<--
    swipeLeft() {
      const cards = this.$refs.swingRef.cards;
      cards[cards.length - 1].throwOut(-25, 0);
    },
    //-->
    swipeRight() {
      const cards = this.$refs.swingRef.cards;
      cards[cards.length - 1].throwOut(25, 0);
    },
    //up
    swipeUp() {
      const cards = this.$refs.swingRef.cards;
      cards[cards.length - 1].throwOut(0, 25);
    },
    //match event
    match() {
      console.log('aaa', this.refCards);
      this.$emit("match", this.refCards[3].img);
    }
  }
};
</script>

<style scoped type="scss">
</style>
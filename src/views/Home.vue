<template>
  <div class="home flex flex-col h-full">

    <div class="h-full pl-2" ref="homeContainer">
      <vue-swing @throwout="throwout" :config="config" ref="swingRef" v-if="showStack">
        <template>
          <card
            v-for="card in cards"
            :key="card.id"
            :data="card"
            :style="{height: cardHeight + 'px', width: cardWidth - 16 + 'px'}"
          />
        </template>
      </vue-swing>

      <transition
      name="loading-animation"
      mode="out-in"
      enter-active-class="animated faster fadeIn"
      leave-active-class="animated faster fadeOut"
    >
      <div class="flex flex-col h-full text-center justify-center align-center" v-if="!showStack">
        <i class="text-4xl text-gray-500 fas fa-search animated infinite bounce"></i>
        <p class="text-bold text-gray-500 mt-4">Buscando items...</p>
      </div>
      </transition>
    </div>

    <footer class="flex w-3/4 items-center justify-between mx-auto my-4" ref="swipeButtons">
      <button
        @click="swipeLeft"
        class="text-4xl bg-white hover:text-green-700 text-green-300 font-bold rounded-full w-20 h-20 overflow-hidden shadow"
      >
        <i class="fas fa-check"></i>
      </button>
      <button
        @click="swipeUp"
        class="text-4xl bg-white hover:bg-gray-700 text-gray-500 font-bold rounded-full w-16 h-16 overflow-hidden shadow"
      >?</button>
      <button
        @click="match"
        class="text-4xl bg-white hover:text-red-700 text-red-300 font-bold rounded-full w-20 h-20 overflow-hidden shadow"
      >
        <i class="fas fa-times"></i>
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
    this.loadCards();
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs);
      this.cardHeight = this.$refs.homeContainer.clientHeight;
      this.cardWidth = this.$refs.homeContainer.clientWidth;
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
        if(this.cards.length == 0)
          this.showStack = false;
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
      this.$emit("match", this.refCards[3].img);
    }
  }
};
</script>

<style scoped type="scss">
</style>
<template>
  <div class="home flex flex-col h-full">
      <vue-swing
        @throwout="throwout"
        :config="config"
        class="h-full"
        ref="swingRef"
      >
        <card
          v-for="card in cards"
          :key="card.id"
          :data="card"
          :style="{height: cardHeight + 'px'}"
        />
      </vue-swing>

      <footer class="flex w-3/4 items-center justify-between mx-auto my-4">
        <button
          @click="swipeLeft"
          class="text-4xl bg-white hover:text-green-700 text-green-300 font-bold rounded-full w-20 h-20 overflow-hidden shadow-lg"
        >
          <i class="far fa-thumbs-up"></i>
        </button>
        <button
          @click="swipeUp"
          class="text-2xl bg-white hover:bg-gray-700 text-gray-500 font-bold rounded-full w-16 h-16 overflow-hidden shadow-lg"
        >
          <i class="fas fa-question"></i>
        </button>
        <button
          @click="match"
          class="text-4xl bg-white hover:text-red-700 text-red-300 font-bold rounded-full w-20 h-20 overflow-hidden shadow-lg"
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

export default {
  name: "home",
  components: {
    VueSwing,
    Card
  },
  data: function() {
    return {
      cardHeight: 0,
      cardWidth: 0,
      config: {
        allowedDirections: [
          VueSwing.Direction.UP,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ],
        // throwOutConfidence: 0,
        // minThrowOutDistance: 25,
        // maxThrowOutDistance: 500,
        throwOutConfidence: function() {
          return 1;
        }
      },
      cards: [
        {
          id: 1,
          title: "Computador DELL",
          price: 27.33,
          img: "https://tailwindcss.com/img/card-top.jpg",
          unity: 1,
          unity_type: "Caixa",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!"
        },
        {
          id: 2,
          title: "Açucar cristalizado",
          price: 52.9,
          img: "https://tailwindcss.com/img/card-top.jpg",
          unity: 1,
          unity_type: "Cento",
          description:
            "Voluptatibus quia, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
          id: 3,
          title: "Sequenciamento DNA",
          price: 2500,
          img: "https://tailwindcss.com/img/card-top.jpg",
          unity: 1,
          unity_type: "Unidade",
          description:
            "Consectetur adipisicing elit. Lorem lorem. Lalala. Voluptatibus quia, nulla!"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.cardHeight = this.$refs.swingRef.$el.clientHeight;
    });
  },
  methods: {
    throwout: function(e) {
      setTimeout(() => {
        this.cards.pop();
      }, 100);
    },
    swipeLeft() {
      const cards = this.$refs.swingRef.cards;
      cards[cards.length - 1].throwOut(-25, 0);
    },
    swipeRight() {
      const cards = this.$refs.swingRef.cards;
      cards[cards.length - 1].throwOut(25, 0);
    },
    swipeUp() {
      const cards = this.$refs.swingRef.cards;
      cards[cards.length - 1].throwOut(0, 25);
    },
    match() {
      this.$emit('match');
    }
  }
};
</script>

<style scoped>
</style>
<template>
  <div class="home flex flex-col h-full">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to SAGUI"/> -->
    <vue-swing
      @throwout="throwout"
      @throwin="throwin"
      class="h-full"
      ref="swingRef"
    >
      <!-- <card v-for="card in cards" :key="card.id" :data="card" /> -->
      <card :style="{height: cardHeight + 'px'}"/>
      <!-- <card :style="{height: cardHeight + 'px'}"/> -->
      <!-- <card /> -->
      <!-- <card class="absolute left-0 right-0"/> -->
    </vue-swing>

    <footer class="flex w-4/6 items-center justify-between mx-auto my-4">
      <button
        class="text-3xl bg-red-300 hover:bg-red-700 text-white font-bold rounded-full w-20 h-20 overflow-hidden shadow-lg"
      >
        <i class="fas fa-thumbs-down fa-flip-horizontal"></i>
      </button>
      <button
        class="text-2xl bg-white hover:bg-gray-700 text-gray-500 font-bold rounded-full w-16 h-16 overflow-hidden shadow-lg"
      >
        <i class="fas fa-question"></i>
      </button>
      <button @click="log"
        class="text-3xl bg-teal-300 hover:bg-green-700 text-white font-bold rounded-full w-20 h-20 overflow-hidden shadow-lg"
      >
        <i class="fas fa-thumbs-up"></i>
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
          // VueSwing.Direction.DOWN,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ]
      },
      cards: [
        {
          id: 1,
          title: "Computador DELL",
          img: "Computador DELL",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!"
        },
        {
          id: 2,
          title: "Açucar cristalizado",
          img: "https://tailwindcss.com/img/card-top.jpg",
          description:
            "Voluptatibus quia, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
        // {
        //   id: 3,
        //   title: "Sequenciamento DNA",
        //   img: "https://tailwindcss.com/img/card-top.jpg",
        //   description:
        //     "Consectetur adipisicing elit. Lorem lorem. Lalala. Voluptatibus quia, nulla!"
        // }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.cardHeight = this.$refs.swingRef.$el.clientHeight;
      // this.cardWidth = this.$refs.swingRef.$el.clientwidth - 10;
    });
  },
  methods: {
    throwout: function(e) {
      console.log("out", e);
    },
    throwin: function(e) {
      console.log("in", e);
    },
    log: function(){
      // console.log(this.$refs.swingRef.clientHeight);
      console.log(this.$refs.swingRef.$el.clientHeight);
      // this.cardHeight = this.$refs.swingRef.$el.clientHeight;
    }
  }
};
</script>

<style scoped>
</style>
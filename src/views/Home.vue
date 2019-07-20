<template>
  <div class="home flex flex-col h-full pl-2">
    <vue-swing @throwout="throwout" :config="config" class="h-full" ref="swingRef">
      <template v-if="showStack">
        <card
          v-for="(card, index) in cards"
          :key="card.id"
          :data="card"
          :img="cardImages[index]"
          :style="{height: cardHeight + 'px', width: 'calc(100% - 16px)'}"
        />
      </template>
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
import axios from "axios";


const IMAGE_API = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBuqRXAyy5p3jsd1IHQ-UtA38gjskrw9qo&cx=010323834795960414770:6x1j0vzhltg&q=';
const PRICE_API = 'https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyBuqRXAyy5p3jsd1IHQ-UtA38gjskrw9qo&cx=010323834795960414770:b14jgo3hhwi&q=';


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
      cards: [
        {
          id: 4,
          title: "Computador DELL",
          price: "5000,00",
          img: "https://tailwindcss.com/img/card-top.jpg",
          unity: 1,
          unity_type: "Unidade",
          description:
            "Computador para atender demanda da secretaria."
        },
        {
          id: 2,
          title: "Tinta para pincel atômico",
          price: "33,00",
          img: "https://tailwindcss.com/img/card-top.jpg",
          unity: 12,
          unity_type: "Unidade",
          description:
            "Mínimo 20ml. vermelha, preta ou azul."
        },
        {
          id: 3,
          title: "Manutenção de ônibus",
          price: "100,00",
          img: "https://tailwindcss.com/img/card-top.jpg",
          unity: 1,
          unity_type: "Unidade",
          description:
            "Serviços mecânicos para manutenção preventiva."
        },
        {
          id: 1,
          title: "Saco plástico para lixo",
          price: "12,00",
          img: "https://tailwindcss.com/img/card-top.jpg",
          unity: 1,
          unity_type: "100",
          description:
            "Capacidade 100 litros. Saco reforçado de polietileno. Embalagem com 100 sacos."
        }        
      ],
      cardImages: []
    };
  },
  created() {
    this.loadCardImages(this.cards);
  },
  mounted() {
    this.$nextTick(() => {
      this.cardHeight = this.$refs.swingRef.$el.clientHeight;
    });
  },
  methods: {
    // loadCards() {
    //   axios
    //     .get(`http://www.mocky.io/v2/5d332a4e3400005a00749f8f`)
    //     .then(response => {
    //       console.log(response.data)
    //       this.cards = response.data;
    //       this.loadCardImages(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    loadCardImages(cards) {
      let promises = cards.map(async card => {
        return axios
          // .get(`http://www.mocky.io/v2/5d32f17a3400005400749f33`)
          .get(this.IMAGE_API + card.title)
          .then(response => {
            console.log(response.data);
            return response.data.items[0].link;
          })
          .catch(e => {
            console.log(e);
          });
      });
      return Promise.all(promises)
      .then(cardImages => {
        this.cardImages = cardImages;
        this.showStack = true;
      });
    },

    //throwout
    throwout() {
      this.matchCount++;

      if(this.matchCount == 3)
        this.match();

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
      this.$emit("match", this.cardImages[3]);
    }
  }
};
</script>

<style scoped>
</style>
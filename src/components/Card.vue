<template>
  <div
    class="card-container bg-white text-left rounded-lg overflow-hidden shadow-lg flex bg-no-repeat bg-center absolute"
    :style="{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${data.img})` }"
  >
    <div class="px-6 py-4 mt-auto">
      <div class="font-bold text-3xl text-gray-200">R$ {{ unitary_price }},00</div>
      <div>
        <span class="font-bold text-xl mb-2 text-gray-200">{{ data.title }}</span>
        <span class="text-md mb-2 text-gray-300"> ({{data.unity_type}})</span>
      </div>
      <p class="text-gray-400 text-base">{{ data.description }}</p>
    </div>
  </div>
</template>

<script>
// import image from "@/assets/item.png"

export default {
  name: "Card",
  props: {
    data: Object
  },
  computed: {
    unitary_price: function(){
      return this.data.price / this.data.unity;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .image {
//   background-color: #ff00ff;
// }
// .item-text {
//   color: #0000ff;
// }
.card-container {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>

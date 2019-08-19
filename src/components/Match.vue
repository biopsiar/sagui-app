<template>
  <div class="match absolute flex flex-col items-center justify-center h-screen">
    <!-- <div class="my-auto h-full"> -->
    <div class="p-6">
      <div class="text-gray-100 font-bold text-4xl mb-2 text-center">Encaminhado!</div>
      <p
        class="text-gray-300 text-base text-center text-md"
      >Um item que você avaliou foi inserido no relatório diário.</p>
    </div>

    <div
      class="border-4 border-gray-300 rounded-full overflow-hidden shadow-lg w-40 h-40 mx-auto cool-bg z-0"
      :style="{backgroundImage: 'url('+ img +')'}"
    ></div>

    <div class="text-gray-500 font-bold text-md py-4 text-center">Ver item</div>

    <div class="py-2">
      <div class="w-3/4 mx-auto my-auto rounded-lg overflow-hidden shadow-lg p-4">
        <div class="text-center text-md">
          <button
            @click="share"
            class="bg-blue-700 hover:bg-blue-900 text-white w-full font-bold mb-4 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          ><i class="fas fa-share pr-2"></i>Compartilhar</button>
          <button
            @click="closeMatch"
            class="bg-gray-300 border border-gray-500 hover:bg-gray-500 text-gray-700 w-full py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          ><i class="fas fa-chevron-left pr-2"></i>Continuar avaliando</button>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: "Match",
  // data: function() {
  //   return {
  //     cardHeight: 0,
  //     cardWidth: 0
  //   };
  // },
  props: {
    img: String
  },
  methods: {
    share() {
      if (navigator.share) {
        navigator
          .share({
            title: "Ajudei a fiscalizar os gastos públicos!",
            text: "SAGUI: Sistema de Avaliações de Gastos Públicos",
            url: "https://biopsiar.github.io"
          })
          .then(() => console.log("Successful share"))
          .catch(error => console.log("Error sharing", error));
      }
    },
    closeMatch(){
      this.$emit('closeMatch');
    }
  }
};
</script>

<style lang="scss">
.match {
  background-color: rgba(0, 0, 0, 0.95);
}
</style>

<template>
  <div
    class="card-container bg-white text-left max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto flex flex-col flex-1 bg-no-repeat bg-center"
    :style="{ background: 'url(https://tailwindcss.com/img/card-top.jpg)' }"
  >
    <!-- <img
      class="w-full flex-1"
      src="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    /> -->
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-white">Computador DELL</div>
      <p
        class="text-gray-300 text-base"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
    </div>
  </div>
</template>

<script>
// import image from "@/assets/item.png"

export default {
  name: "Card"
  // props: {
  //   msg: String
  // }
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

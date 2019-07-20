<template>
  <div class="profile flex flex-col h-full p-4">
    <div
      class="rounded-full overflow-hidden shadow-lg w-40 h-40 mx-auto cool-bg z-0"
      style="background-image: url(https://avatars0.githubusercontent.com/u/10541523)"
    >
      <!-- <img class="w-full h-full" src="https://tailwindcss.com/img/card-top.jpg"> -->
    </div>
    <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg text-left -m-20 mx-auto pt-20">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-center">Diogo Coelho</div>
        <p class="text-gray-700 text-base text-center">Apenas um cidadão tentando fazer sua parte.</p>
      </div>

      <!-- <div class="flex bg-gray-100">
            <i class="far fa-thumbs-up text-green-300 text-5xl"></i>
            <p class="text-gray-700 text-bold text-5xl ml-2">24</p>
      </div>-->

      <!-- Two columns -->
      <div class="flex mb-4 p-4 text-center">
        <div class="flex flex-col w-1/2 h-12">
          <div class="flex mb-1 justify-center">
            <div class="h-12">
              <i class="far fa-thumbs-up text-green-300 text-5xl"></i>
            </div>
            <div class="h-12">
              <p
                class="text-gray-700 text-4xl"
              >24</p>
            </div>
          </div>
          <p class="text-center text-2xl">Positivas</p>
        </div>
        <div class="flex flex-col w-1/2 h-12">
          <div class="flex mb-1 justify-center">
            <div class="h-12">
              <i class="far fa-thumbs-down fa-flip-horizontal text-red-300 text-5xl"></i>
            </div>
            <div class="h-12">
              <p
                class="text-gray-700 text-4xl"
              >24</p>
            </div>
          </div>
          <p class="text-center text-2xl">Negativas</p>
        </div>
      </div>

      <!-- <i class="far fa-thumbs-down fa-flip-horizontal text-red-300 text-5xl"></i> -->
    </div>
  </div>
</template>

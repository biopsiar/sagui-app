<template>
  <div class="profile flex flex-col h-full">
    <div class="bg-blue-500 h-32 -mb-20">
    </div>
    <div
      class="border-4 border-white rounded-full overflow-hidden shadow-lg w-40 h-40 mx-auto cool-bg z-0"
      style="background-image: url(https://avatars0.githubusercontent.com/u/10541523)"
    ></div>
    <div class="bg-white w-full h-full rounded-t-lg overflow-hidden shadow text-left -m-24 mx-auto pt-32 pb-4">
        <p class="text-gray-700 text-lg text-center mb-3">
          <i class="fas fa-star"></i> 3657
        </p>
        <div class="font-bold text-xl text-center">Diogo Coelho</div>
        <p class="text-gray-700 text-base text-center">Apenas um cidadão comum.</p>

        <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
          Seguir
        </button>-->

      <!-- Two columns -->
      <div class="flex mb-4 p-6 text-center">
        <div class="flex flex-col w-1/3">
          <div class="flex mb-1 justify-center">
            <div class="h-12">
              <i class="far fa-thumbs-up text-green-300 text-4xl"></i>
            </div>
            <div class="h-12">
              <p class="text-gray-700 text-3xl pl-1">23</p>
            </div>
          </div>
          <p class="text-center text-gray-700 text-base">Positivas</p>
        </div>
        <div class="flex flex-col w-1/3">
          <div class="flex mb-1 justify-center">
            <div class="h-12">
              <i class="far fa-thumbs-down fa-flip-horizontal text-red-300 text-4xl"></i>
            </div>
            <div class="h-12">
              <p class="text-gray-700 text-3xl pl-1">57</p>
            </div>
          </div>
          <p class="text-center text-gray-700 text-base">Negativas</p>
        </div>
        <div class="flex flex-col w-1/3">
          <div class="flex mb-1 justify-center">
            <div class="h-12">
              <i class="far fa-thumbs-down fa-flip-horizontal text-red-300 text-4xl"></i>
            </div>
            <div class="h-12">
              <p class="text-gray-700 text-3xl pl-1">57</p>
            </div>
          </div>
          <p class="text-center text-gray-700 text-base">Negativas</p>
        </div>
      </div>

      <!-- <i class="far fa-thumbs-down fa-flip-horizontal text-red-300 text-5xl"></i> -->
    </div>
  </div>
</template>

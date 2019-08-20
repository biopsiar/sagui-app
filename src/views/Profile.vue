<template>
  <div class="profile flex flex-col h-full">
    <div class="h-32 -mb-20 sagui-gradient">
    </div>
    <div
      class="border-4 border-white rounded-full animated zoomIn faster overflow-hidden shadow-lg w-40 h-40 mx-auto cool-bg z-0"
      style="background-image: url(https://avatars0.githubusercontent.com/u/10541523)"
    ></div>
    <div class="bg-white w-full h-full rounded-t-lg overflow-hidden shadow text-left -m-24 mx-auto pt-32 p-4">
        <p class="text-gray-700 text-lg text-center mb-3">
          <i class="fas fa-star"></i> 3657
        </p>
        <div class="font-bold text-xl text-center">Diogo Coelho</div>
        <p class="text-gray-600 text-base text-center">Apenas mais um cidadão comum tentando fazer sua parte no mundo.</p>

      <div class="flex text-center w-full justify-between py-8">
        <div class="flex-col">
          <!-- upper -->
          <div class="flex justify-center">
            <i class="fas fa-check text-green-300 text-4xl"></i>
            <p class="text-gray-700 text-3xl pl-1">23</p>
          </div>
          <p class="text-center text-gray-700 text-base">Positivas</p>
        </div>
        <div class="flex-col">
          <!-- upper -->
          <div class="flex justify-center">
            <i class="fas fa-times fa-flip-horizontal text-red-300 text-4xl"></i>
            <p class="text-gray-700 text-3xl pl-1">23</p>
          </div>
          <p class="text-center text-gray-700 text-base">Negativas</p>
        </div>
        <div class="flex-col">
          <!-- upper -->
          <div class="flex justify-center">
            <i class="fas fa-exclamation-circle text-gray-500 text-4xl"></i>
            <p class="text-gray-700 text-3xl pl-1">23</p>
          </div>
          <p class="text-center text-gray-700 text-base">Encaminhamentos</p>
        </div>
      </div>
      
      <div class="text-center">

        <button class="sagui-gradient w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
          <i class="fas fa-share pr-2"></i>Compartilhar perfil
        </button>
      </div>

      <!-- <i class="far fa-thumbs-down fa-flip-horizontal text-red-300 text-5xl"></i> -->
    </div>
  </div>
</template>

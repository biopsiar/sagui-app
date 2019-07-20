<template>
  <div class="login flex flex-col h-full p-4">
    <div class="px-6 pt-4">
        <div class="font-bold text-4xl mb-2 text-center">SAGUI</div>
        <p class="text-gray-700 text-base text-center">Sistema de Avaliação de Gastos Públicos</p>

        <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
          Seguir
        </button>  class="animated infinite bounce delay-2s"-->
      </div>
    <div class="my-auto">
      <img class="w-3/4 mx-auto pb-8" :src="require('@/assets/undraw_voting.svg')" />
      <div class="animated fade delay-2s bg-white w-3/4 mx-auto my-auto rounded-lg overflow-hidden shadow-lg p-4">
        <div class="text-center">
          <router-link to="/home" tag="button"
            class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold mb-2 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >Entrar com facebook</router-link>
          <router-link to="/home" tag="button"
            class="bg-white border border-gray-500 hover:bg-gray-300 text-gray-700 w-full font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button"
          >Entrar com e-mail</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="login flex flex-col h-full p-4 animated fadeInUp">
    <div class="px-6 pt-4">
      <div class="font-bold text-4xl mb-2 text-center">SAGUI</div>
      <p class="text-gray-700 text-base text-center">Sistema de Avaliação de Gastos Públicos</p>

      <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-auto">
          Seguir
      </button>  class="animated infinite bounce delay-2s"-->
    </div>
    <div class="my-auto">
      <transition
        name="login-animation"
        mode="out-in"
        enter-active-class="animated faster fadeInUp"
        leave-active-class="animated faster fadeOutDown"
      >
        <div v-if="stage==0">
          <img
            class="w-3/4 max-w-xl mx-auto pb-8 pb-4"
            :src="require('@/assets/undraw_voting.svg')"
          />
          <div
            class="bg-white w-3/4 mx-auto my-auto rounded-lg overflow-hidden shadow-lg p-4"
            key="firstStage"
          >
            <button
              @click="nextStage()"
              class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold mb-2 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >Entrar com facebook</button>
            <button
              @click="nextStage()"
              class="bg-white border border-gray-500 hover:bg-gray-300 text-gray-700 w-full font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >Entrar com e-mail</button>
          </div>
        </div>

        <form
          v-else
          class="bg-white w-3/4 mx-auto my-auto rounded-lg overflow-hidden shadow-lg p-4 text-left"
          key="secondStage"
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="flex items-center justify-between">
            <router-link
              to="/home"
              tag="button"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >Sign In</router-link>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >Forgot Password?</a>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      stage: 0
    };
  },
  methods: {
    nextStage() {
      this.stage++;
    }
  }
};
</script>
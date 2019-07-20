<template>
  <div
    id="app"
    class="flex flex-col h-screen max-w-xl mx-auto"
    :class="{ bglogin: $route.path == '/' }"
  >
    <!-- <login v-if="!loggedIn"/> -->
    <div v-if="$route.path != '/'" id="nav" class="text-2xl font-bold text-gray-700 flex justify-between px-5 pt-5 pb-2">
      <router-link to="/settings">
        <i class="fas fa-cog"></i>
      </router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/profile">
        <i class="fas fa-user"></i>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// import Login from "@/components/Card.vue";

// export default {
//   name: "App",
//   components: {
//     Login
//   },
//   data: function() {
//     return {
//       loggedIn: false
//     };
//   },
//   methods: {
//     login () {
//       this.loggedIn = true;
//     }
//   }
// };
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  // padding: 30px;
  a {
    // font-weight: bold;
    // color: #2c3e50;
    &.router-link-exact-active {
      color: #2b6cb0;
    }
  }
  // display: flex;
  // justify-content: space-between;
}
</style>

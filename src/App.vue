<template>
  <div id="app" class="flex flex-col h-screen">
    <div id="nav" class="text-2xl font-bold text-gray-700 flex justify-between px-5 py-5">
      <router-link to="/settings"><i class="fas fa-cog"></i></router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/profile"><i class="fas fa-user"></i></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
      color: #42b983;
    }
  }
  // display: flex;
  // justify-content: space-between;
}
</style>

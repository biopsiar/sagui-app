<template>
  <div
    id="app"
    class="flex flex-col h-screen max-w-md"
    :class="{ bglogin: $route.path == '/' }"
  >
    
    <svg width="0" height="0">
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>
    </svg>
    
    <!-- <login v-if="!loggedIn"/> -->
    <transition
      name="nav-animation"
      mode="out-in"
      enter-active-class="animated faster fadeInDown"
      leave-active-class="animated faster fadeOutUp"
    >
      <!-- main nav -->
      <div
        v-if="$route.path == '/home'"
        id="nav"
        key="main"
        class="text-2xl font-bold text-gray-600 flex justify-between px-5 pt-5 pb-2"
      >
        <router-link to="/settings">
          <i class="fas fa-cog"></i>
        </router-link>
        <router-link to="/home">SAGUI</router-link>
        <router-link to="/profile">
          <i class="fas fa-user"></i>
        </router-link>
      </div>

      <!-- back nav -->
      <div
        v-else-if="$route.path != '/'"
        id="nav"
        key="back"
        class="text-left text-md font-bold flex p-5 pb-3 bg-white w-full shadow z-50"
      >
        <a @click="$router.go(-1)">
          <i class="fas fa-arrow-left text-blue-600 mr-6"></i>
        </a>
        <label class="capitalize text-gray-700">{{ $route.name }}</label>
      </div>
    </transition>

    <!-- <transition
      name="router-animation"
      mode="out-in"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >-->

    <transition
      name="router-animation"
      mode="out-in"
      :enter-active-class="dynamicEnterAnimation"
      :leave-active-class="dynamicLeaveAnimation"
    >
      <router-view @match="toggleMatchScreen" style="transition: .5s" :style="{ filter: isMatchScreen ? 'url(#blur)' : 'none' }"/>
    </transition>

    <transition
      name="match-animation"
      enter-active-class="animated faster fadeIn"
      leave-active-class="animated faster fadeOut"
    >
      <match v-show="isMatchScreen" @closeMatch="toggleMatchScreen" :img="matchImage" />
    </transition>
  </div>
</template>

<script>
import Match from "@/components/Match.vue";

export default {
  name: "App",
  components: {
    Match
  },
  data: function() {
    return {
      isMatchScreen: false,
      matchImage: "",
      dynamicEnterAnimation: "animated faster fadeIn",
      dynamicLeaveAnimation: "animated faster fadeOut"
    };
  },
  // router.beforeRouteUpdate (to, from, next) {
  //   console.log(1)
  //   // const toDepth = to.path.split('/').length
  //   // const fromDepth = from.path.split('/').length
  //   // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  //   next()
  // },
  watch: {
    $route(to, from) {
      // if (fromRoute == undefined) return;
      let toRoute = to.matched[0].meta.order;
      let fromRoute = from.matched[0].meta.order;
      // console.log(to.matched[0].meta.order);
      if (fromRoute == -1) {
        this.dynamicEnterAnimation = "animated faster fadeIn";
        this.dynamicLeaveAnimation = "animated faster fadeOut";
      } else if (toRoute < fromRoute) {
        this.dynamicEnterAnimation = "animated faster fadeInLeft";
        this.dynamicLeaveAnimation = "animated faster fadeOutRight";
      } else {
        this.dynamicEnterAnimation = "animated faster fadeInRight";
        this.dynamicLeaveAnimation = "animated faster fadeOutLeft";
      }
    }
  },
  methods: {
    login() {
      this.loggedIn = true;
    },
    toggleMatchScreen(img) {
      if (img) this.matchImage = img;
      if (this.isMatchScreen) this.isMatchScreen = false;
      else this.isMatchScreen = true;
    }
  }
};
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

<template>
  <div id="app">
    <div class="__preloader" v-if="loading">
      <preloader />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>
<script>
import preloader from "./components/preloader.vue";
export default {
  name: "app",
  components: { preloader },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  data: () => {
    return {
      loading: true
    };
  }
};
</script>

<style lang="scss">
html,
body {
  height: auto;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #00cec9;
}

[v-cloak] {
  display: none;
}
</style>

<template>
  <div class="home">
    <Navbar />
    <b-container>
      <Main />
    </b-container>
  </div>
</template>

<script>
import Main from "../components/main.vue";
import Navbar from "../components/navbar.vue";
export default {
  name: "home",
  components: { Navbar, Main }
};
</script>

<template>
  <main class="bg-login">
    <b-navbar variant="dark" type="dark">
      <b-navbar-brand href="#">Pseudoslack</b-navbar-brand>
    </b-navbar>
    <div class="container-fluid">
      <!-- As a link -->
      <Signin />
    </div>
  </main>
</template>
<script>
import Signin from "@/components/Signin.vue";
export default {
  name: "Login",
  components: { Signin }
};
</script>
<style>
.bg-login {
  height: 100vh;
  background: #00cec9;
}
</style>

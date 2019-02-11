<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 col-sm-12"><Signin /></div>
      <div class="col-md-6 col-sm-12"><Signup /></div>
    </div>
  </div>
</template>
<script>
import Signin from "@/components/Signin.vue";
import Signup from "@/components/Signup.vue";
export default {
  name: "Login",
  components: { Signin, Signup }
};
</script>

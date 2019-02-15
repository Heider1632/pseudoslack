<template>
  <div>
    <b-form>
      <b-form-group
        label="Email address:"
        label-for="exampleInput1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="exampleInput1"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group
        label="Password:"
        description="We'll never share your password with anyone else."
      >
        <b-form-input
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        >
        </b-form-input>
      </b-form-group>
      <b-button @click="login()" variant="primary">Iniciar sesión</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from "../firebase.js";
export default {
  name: "Signin",
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      //login with firebase
      firebase.auth
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          () => {
            this.$router.push({ path: "/" });
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>

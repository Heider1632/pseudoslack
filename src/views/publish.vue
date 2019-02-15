<template>
  <main>
    <Navbar />
    <b-container fluid>
      <div>
        <br />
        <b-form @submit="sendPublish">
          <b-form-group>
            <b-form-input
              type="text"
              v-model="textquestion"
              required
              placeholder="you question"
            />
          </b-form-group>
          <b-form-group>
            <b-form-input
              type="text"
              v-model="texterror"
              required
              placeholder="you error"
            />
          </b-form-group>
          <b-form-group>
            <b-form-textarea
              type="text"
              rows="7"
              v-model="textcode"
              required
              placeholder="you code"
            />
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </b-container>
  </main>
</template>
<script>
import firebase from "../firebase.js";
import Navbar from "../components/navbar.vue";
export default {
  name: "publish",
  components: { Navbar },
  data: () => {
    return {
      texterror: "",
      textquestion: "",
      textcode: ""
    };
  },
  methods: {
    sendPublish() {
      firebase.db
        .collection("publish")
        .add({
          texterror: this.texterror,
          textquestion: this.textquestion,
          textcode: this.textcode,
          username: firebase.auth.currentUser.name,
          id: firebase.auth.currentUser.uid
        })
        .then(() => {
          this.$router.push({ path: "/" });
        });
    }
  }
};
</script>

<template>
  <main>
    <Navbar />
    <b-container fluid>
      <div>
        <br />
        <b-form>
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

          <b-button @click="sendPublish" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </b-container>
  </main>
</template>
<script>
import Navbar from "../components/navbar.vue";
import postPublish from "../components/publish.js";
import store from "../store.js";
export default {
  name: "publish",
  components: { Navbar },
  data: () => {
    return {
      texterror: "",
      textquestion: "",
      textcode: "",
      author: store.getters.getUser.user.email
    };
  },
  methods: {
    sendPublish() {
      postPublish(
        this.textcode,
        this.texterror,
        this.textquestion,
        this.author
      );
    }
  }
};
</script>

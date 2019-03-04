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
              id="input-invalid"
              :state="false"
              placeholder="you error"
            />
          </b-form-group>
          <b-form-group>
            <b-form-textarea rows="5" v-model="textcode" required />
          </b-form-group>

          <b-button @click="sendPublish" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </b-container>
  </main>
</template>
<script>
import Navbar from "../components/navbar.vue";
import postPublish from "../components/mixins/publish.js";
import store from "../store.js";
export default {
  name: "publish",
  components: { Navbar },
  data: () => {
    return {
      texterror: "",
      textquestion: "",
      textcode: "",
      author: store.getters.getUser.email,
      uid: store.getters.getUser.uid
    };
  },
  methods: {
    sendPublish() {
      postPublish(
        this.textcode,
        this.texterror,
        this.textquestion,
        this.author,
        this.uid
      );
    }
  }
};
</script>

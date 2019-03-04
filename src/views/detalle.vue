<template>
  <b-container class="content-detail">
    <Navbar />
    <b-row v-if="!!publish">
      <b-col cols="7" class="pt-4">
        <b-card
          bg-variant="dark"
          text-variant="white"
          :title="publish.textquestion"
        >
          <b-alert variant="danger" show>{{ publish.texterror }}</b-alert>

          <code class="codeblock">
            <pre>
            {{ publish.textcode }}
          </pre
            >
          </code>
          <b-card-footer>
            <b-button variant="outline-primary" v-b-toggle.collapse
              >Comentar</b-button
            >
            <b-collapse id="collapse" class="mt-2">
              <b-form-group
                id="fieldsetHorizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                label="Ingresa tu comentario"
                label-for="inputHorizontal"
              >
                <b-form-input id="inputHorizontal" v-model="comment" />
                <b-button
                  block
                  variant="success"
                  class="mt-2"
                  @click="sendComment"
                  >Enviar</b-button
                >
              </b-form-group>
            </b-collapse>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col cols="5" class="pt-4">
        <Comments :uid="this.$route.params.id" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "../firebase.js";
import Navbar from "../components/navbar.vue";
import Comments from "../components/comments.vue";
import postComment from "../components/mixins/comment.js";
import store from "../store.js";
export default {
  name: "detalle",
  components: { Navbar, Comments },
  props: {
    publishProp: {
      type: Object
    }
  },
  data() {
    return {
      publish: undefined,
      active: true,
      comment: "",
      author: store.getters.getUser.email,
      photoURL: store.getters.getUser.photoURL,
      commets: null
    };
  },
  mounted() {
    if (this.publishProp) {
      this.publish = this.publishProp;
    } else {
      const id = this.$route.params.id;
      firebase.db
        .doc(`publish/${id}`)
        .get()
        .then(doc => {
          this.publish = doc.data();
        });
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    sendComment() {
      postComment(
        this.comment,
        this.$route.params.id,
        this.photoURL,
        this.author
      );
    }
  }
};
</script>
<style>
.content-detail {
  height: 100vh;
}
.togglebutton {
  padding: 1em;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
}
.element {
  padding: 1em;
  background-color: #b3e5fc;
}
</style>

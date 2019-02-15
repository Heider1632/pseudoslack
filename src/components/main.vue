<template>
  <b-row>
    <b-col v-for="(index, key, p) in publish" :key="key">
      <b-card>
        <b-card-header>{{ p.question }}</b-card-header>
        <b-card-header>{{ p.error }}</b-card-header>
        <b-card-body>
          <b-textarea>
            {{ p.textcode }}
          </b-textarea>
        </b-card-body>
        <b-card-footer>
          <button class="btn btn-primary" id="action">Comentar</button>
        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
import firebase from "../firebase.js";
export default {
  data: () => {
    return {
      publish: {}
    };
  },
  created() {
    firebase.db
      .collection("publish")
      .get()
      .then(snapshot => {
        this.publish = snapshot.value;
      });
  },
  methods: {}
};
</script>
<style scoped></style>

<template>
  <b-row>
    <b-col v-for="(p, key) in publish" :key="key">
      <b-card
        bg-variant="dark"
        text-variant="white"
        :title="p.textquestion"
        :sub-title="p.texterror"
      >
        <b-card-text>
          {{ p.textcode }}
        </b-card-text>
        <b-card-footer>
          <span>{{ p.info }}</span>
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
      publish: []
    };
  },
  created() {
    firebase.db
      .collection("publish")
      .orderBy("created_at")
      .onSnapshot(snapShot => {
        this.publish = [];
        snapShot.forEach(publish => {
          this.publish.push({
            id: publish.id,
            textcode: publish.data().textcode,
            texterror: publish.data().texterror,
            textquestion: publish.data().textquestion,
            info: publish.data().info
          });
        });
      });
  }
};
</script>
<style scoped></style>

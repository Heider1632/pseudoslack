<!-- HTML -->
<template>
  <b-row>
    <b-col cols="8" class="pt-4" v-for="(p, key, index) in publish" :key="key">
      <b-card
        bg-variant="dark"
        text-variant="white"
        :title="p.textquestion"
        @click="
          $router.push({
            name: 'detalle',
            params: { id: p.id, publishProp: p[index] }
          })
        "
      >
        <b-alert variant="danger" show>{{ p.texterror }}</b-alert>
        <code class="codeblock">
          <pre>
            {{ p.textcode }}
          </pre>
        </code>
        <b-card-footer>
          <span>{{ p.info }}</span>
        </b-card-footer>
      </b-card>
    </b-col>
  </b-row>
</template>

<!-- javascrip -->
<script>
import firebase from "../firebase.js";
export default {
  name: "detalle",
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
<!-- CSS -->
<style>
pre {
  white-space: pre-wrap;
  background: whitesmoke;
  font-size: 1.9em;
  align-content: center;
  height: 200px;
}
</style>

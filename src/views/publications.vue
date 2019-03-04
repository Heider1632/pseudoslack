<template>
  <main>
    <Navbar />
    <b-row>
      <b-col cols="8" class="pt-4" v-for="(p, key) in publications" :key="key">
        <b-card
          bg-variant="dark"
          text-variant="white"
          :title="p.textquestion"
          @click="deletePublication"
        >
          <b-alert variant="danger" show>{{ p.texterror }}</b-alert>
          <code class="codeblock">
            <pre>
            {{ p.textcode }}
          </pre
            >
          </code>
          <b-card-footer></b-card-footer>
        </b-card>
      </b-col>
    </b-row>
  </main>
</template>
<script>
import firebase from "@/firebase";
import store from "@/store";
import moment from "moment";
import Navbar from "../components/navbar.vue";
export default {
  name: "publications",
  components: { Navbar },
  data() {
    return {
      publications: [],
      uid: store.getters.getUser.uid
    };
  },
  mounted: function() {
    var $vm = this;

    firebase.db
      .collection("publish")
      .where("_uid", "==", this.uid)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var timestamp = new Date(doc.data().created_at);
          var created = (doc.data().created_at = moment(
            timestamp,
            "YYYYMMDD"
          ).fromNow());
          // doc.data() is never undefined for query doc snapshots
          $vm.comments.push({
            timestamp: created,
            textquestion: doc.data().textquestion,
            texterror: doc.data().texterror,
            textcode: doc.data().textcode
          });
        });
      });
  },
  methods: {
    deletePublication() {}
  }
};
</script>
<style></style>

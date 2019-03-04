<template>
  <main>
    <b-list-group v-for="(c, index, key) in comments" :key="key" class="mt-2">
      <b-list-group-item class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">
            <img :src="c.photoURL" width="50" />
          </h5>
          <small>{{ c.timestamp }}</small>
        </div>

        <p class="mb-1">
          {{ c.comment }}
        </p>

        <small>{{ c.info }}</small>
      </b-list-group-item>
    </b-list-group>
  </main>
</template>
<script>
import firebase from "@/firebase";
import moment from "moment";
export default {
  name: "comments",
  props: {
    uid: {
      type: String
    }
  },
  data() {
    return {
      comments: []
    };
  },
  mounted: function() {
    let $vm = this;

    firebase.db
      .collection("comments")
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
            comment: doc.data().comment,
            photoURL: doc.data().photoURL,
            info: doc.data().info
          });
        });
      });
  }
};
</script>
<style></style>

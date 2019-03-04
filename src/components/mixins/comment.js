import firebase from "../../firebase.js";
import router from "../../router";

export default (comment, _uid, photoURL, author) => {
  let d = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  firebase.db
    .collection("comments")
    .add({
      comment,
      _uid,
      photoURL,
      info: `Posted by ${author != "" ? author : "Unknow"} on ${
        days[d.getDay()]
      }`,
      created_at: new Date().getTime()
    })
    .then(router.go(-1));
};

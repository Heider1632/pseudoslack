import firebase from "../firebase.js";
import router from "../router";

export default (textcode, texterror, textquestion, author) => {
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
    .collection("publish")
    .add({
      textquestion,
      textcode,
      texterror,
      info: `Posted by ${author != "" ? author : "Unknow"} on ${
        days[d.getDay()]
      }`,
      created_at: new Date().getTime()
    })
    .then(router.go(-1));
};

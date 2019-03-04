<template>
  <main class="wrapper">
    <div class="social-btns">
      <a class="btn facebook" @click="handleFacebook">
        <i class="fab fa-facebook"></i>
      </a>
      <a class="btn twitter" @click="handleTwitter">
        <i class="fab fa-twitter"></i>
      </a>
      <a class="btn google" @click="handleGoogle">
        <i class="fab fa-google"></i>
      </a>
    </div>
  </main>
</template>

<script>
import firebase from "../firebase.js";
import store from "../store.js";
import router from "../router";
export default {
  name: "Signin",
  methods: {
    handleGoogle() {
      firebase.auth
        .signInWithPopup(firebase.Googleprovider)
        .then(function(result) {
          // The signed-in user info.
          var user = result.user;
          // ...
          store.dispatch("PUSH_USER", user).then(() => {
            router.push({ path: "/" });
          });
        });
    },
    handleFacebook() {
      firebase.auth
        .signInWithPopup(firebase.Facebookprovider)
        .then(function(result) {
          var user = result.user;

          store.dispatch("PUSH_USER", user).then(() => {
            router.push({ path: "/" });
          });
        });
    },
    handleTwitter() {
      firebase.auth
        .signInWithPopup(firebase.Twitterprovider)
        .then(function(result) {
          // The signed-in user info.
          var user = result.user;
          // ...
          store.dispatch("PUSH_USER", user).then(() => {
            router.push({ path: "/" });
          });
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  position: absolute;
  top: 40%;
  right: 40%;
  height: 100vh;
  /*transform: translate(50%,-50%);*/
}

.social-btns .btn,
.social-btns .btn:before,
.social-btns .btn .fab {
  transition: all 0.35s;
  transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
}
.social-btns .btn:before {
  top: 90%;
  left: -110%;
}
.social-btns .btn .fab {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.social-btns .btn.facebook:before {
  background-color: #3b5998;
}
.social-btns .btn.facebook .fab {
  color: #3b5998;
}
.social-btns .btn.twitter:before {
  background-color: #3cf;
}
.social-btns .btn.twitter .fab {
  color: #3cf;
}
.social-btns .btn.google:before {
  background-color: #dc4a38;
}
.social-btns .btn.google .fab {
  color: #dc4a38;
}

.social-btns .btn:focus:before,
.social-btns .btn:hover:before {
  top: -10%;
  left: -10%;
}
.social-btns .btn:focus .fab,
.social-btns .btn:hover .fab {
  color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.social-btns {
  height: 80px;
  margin: auto;
  font-size: 0;
  text-align: center;
}
.social-btns .btn {
  display: inline-block;
  background-color: #fff;
  width: 90px;
  height: 90px;
  line-height: 80px;
  margin: 0 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 28%;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  opacity: 0.99;
}
.social-btns .btn:before {
  content: "";
  width: 120%;
  height: 120%;
  position: absolute;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.social-btns .btn .fab {
  font-size: 38px;
  vertical-align: middle;
}
</style>

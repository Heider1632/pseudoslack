<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <router-link to="/" class="nav-title">Pseudoslack</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link class="nav-title" to="publish">
              <i class="far fa-plus-square"></i>
              Añadir publicación
            </router-link>
          </b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <img class="navbar-img" :src="photoURL" width="50" />
            </template>
            <b-dropdown-item href="#">
              <i class="fas fa-list"></i>
              <router-link to="publications">
                Mis Publicaciones
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#" @click="Logout">
              <i class="fas fa-sign-in-alt"></i>
              Salir
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import firebase from "../firebase.js";
import store from "../store.js";
export default {
  name: "navbar",
  data: () => {
    return {
      photoURL: store.getters.getUser.photoURL
    };
  },
  methods: {
    Logout() {
      firebase.auth.signOut().then(() => {
        this.$router.go({ path: this.$route.path });
      });
    }
  }
};
</script>
<style>
.navbar-img {
  border-radius: 15%;
}
.nav-title {
  color: white;
  text-decoration: none;
  font-size: 1.4em;
}
</style>

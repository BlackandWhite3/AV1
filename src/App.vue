<template>
  <div id="app">
    <header>
      <!--      <router-link to="/">Home</router-link> |-->
      <!--      <router-link to="/about">About</router-link>-->
      <p>Авито.Недвижимость</p>
      <hr />
    </header>
    <main>
      <router-view />
    </main>
    <footer style="text-align: center">
      <hr />
      Alexander Fadeev ©
    </footer>
  </div>
</template>

<script>
  import { store } from "./store.js"
const axios = require("axios");

export default {
  data() {
    return {
      property: store.state
    }
  },
  mounted() {
    axios
      .get("http://134.209.138.34/items")
      .then(response => store.set(response));
  }
};
</script>

<style lang="scss">
header {
  text-align: left;
  p {
    margin: 0px 5px;
    vertical-align: middle;
    padding-left: 20px;
  }
  hr {
    margin: 5px 0px;
  }
}
</style>

<template>
  <div class="about">
    <h2>This is an about page</h2>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      currentId: this.$attrs.id,
      property: Object
    };
  },
  mounted() {
    axios
      .get("http://134.209.138.34/item/" + this.currentId)
      .then(response => (this.property = response));
  }
};
</script>

<template>
  <main>
    <h2>{{ sale.data[0].title }}</h2>
      <p>{{sale.data[0].price}}</p>
    <div class="carousel-container">
    <b-carousel
      controls
      indicators
      no-animation="true"
      background="#fff"
      style="text-shadow: 1px 1px 2px #333; display: inline-block!important"
    >
      <b-carousel-slide v-for="i in sale.data[0].images.length" :key="i">
        <template v-slot:img>
          <img
            class="d-block"
            style="max-width: 100%; height: auto;"
            :src="sale.data[0].images[i - 1]"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
      </div>
      <p>{{sale.data[0].address}}</p>
      <p>{{sale.data[0].description}}</p>
      <p>{{sale.data[0].sellerName}}</p>
  </main>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      currentId: this.$attrs.id,
      sale: {
        data: [
          {
            title: "hello",
            images: []
          }
        ]
      },
      myArr: []
    };
  },
  mounted() {
    axios
      .get("http://134.209.138.34/item/" + this.currentId)
      .then(response => (this.sale = response));
    this.MyArr = this.sale.data[0].images;
  }
};
</script>

<style scoped>
main {
  margin: 0 auto;
  padding: 2% 0%;
  text-align: center;
}
  .carousel-container {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }
</style>

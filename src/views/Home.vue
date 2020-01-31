<template>
  <main>
<!--    <div class="item-container" v-for="item in property.info.data" :key="item.id">-->
<!--      <h3>{{item.title}}</h3>-->
<!--      <img :src="item.previewImage" >-->
<!--    </div>-->
    <b-card bg-variant="light"
            border-variant="info"
            v-for="item in property.data" :key="item.id"
            :img-src="item.previewImage"
            img-top
            :title="item.title"
            :sub-title="item.id.toString()"
    >
      <b-card-text>{{ item.address }}</b-card-text>
      <b-card-text>{{item.price}}</b-card-text>
      <b-button variant="primary">
        <router-link
              :to="'/about/'+ item.id"
              tag="a"
              target="_blank"
      >About</router-link></b-button>
    </b-card>
  </main>
</template>

<script>

export default {
  name: "home",
  props: {
    property: {}
  }
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
  .item-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-width: 370px;
    min-height: 220px;
    margin: 50px 20px;
  }
  .img-container {

  }
</style>

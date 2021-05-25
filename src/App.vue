<template>
  <v-header/>
  <div class="container">
<!--    <v-element-of-market/>
    <v-element-of-market/>
    <v-element-of-market/>
    <v-element-of-market/>
    <v-element-of-market/>
    <v-element-of-market/>
    <v-element-of-market/>
    <v-listing/>-->
    <v-article/>
  </div>
  <v-footer/>
</template>

<script>
import vArticle from './components/v-article'
/*import vListing from "./components/v-listing"*/
import vHeader from "./components/v-header"
/*
import vElementOfMarket from "./components/v-element-of-market"
*/
import vFooter from "./components/v-footer"
import VArticle from "./components/v-article";

export default {
  name: 'App',
  components: {
    VArticle,
    vHeader,
  /*  vElementOfMarket,
    vListing,*/
    vFooter,
    vArticle
  }
}

</script>

<style lang="scss">

</style>

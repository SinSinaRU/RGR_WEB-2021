<template>
  <v-background/>
  <div id="content">
    <v-element-of-shop/>
    <v-element-of-shop/>
    <v-element-of-shop/>
    <v-element-of-shop/>
    <v-category-element/>
    <v-category-element/>
    <v-category-element/>
    <v-category-element/>
  </div>
</template>

<script>
import vElementOfShop from './v-element-of-shop'
import vBackground from './v-background'
import Dummy from "dummyjs";
import vCategoryElement from './v-category-element'

export default {
  name: "v-indexElements",
  components: {vElementOfShop, vCategoryElement, vBackground},
  data() {
    return {
      dummy_text: Dummy.text(10000),
    }
  }
}

</script>

<style lang="scss">
#v-indexElements {
}
</style>


<template>
  <div id="background"></div>
 <vCap />
 <v-index-elements/>
</template>

<script>
import vIndexElements from "./components/v-indexElements.vue"
import vCap from "./components/v-Cap.vue"
export default {
  name: 'App',
  components: {
    vCap,
    vIndexElements
  }
}

</script>

<style lang="scss">
#app {
  position: absolute;
  top:0vh;
  left: 0vw;
  width: 100vw;
  height: 100vh;
}
#background{
  position: fixed;
  top: 0vh;
  background: $main-back-color;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>

<link rel="stylesheet" href="../dist/css/app.5c26c694.css">
<template>
  <div id="background"></div>
  <v-header/>
  <v-index-elements/>
  <v-footer/>
</template>

<script>
import vIndexElements from "./components/v-index-elements"
import vHeader from "./components/v-header"
import vFooter from "./components/v-footer"

export default {
  name: 'App',
  components: {
    vHeader,
    vIndexElements,
    vFooter
  }
}

</script>

<style lang="scss">

#app {
  position: absolute;
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 100vh;
}

#background {
  position: fixed;
  top: 0vh;
  background: $main-back-color;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>

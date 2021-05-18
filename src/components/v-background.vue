<template>
  <div class="v-background"></div>
</template>

<script>


export default {
  name: "v-background"
}

</script>

<style lang="scss">
.v-background {
  position: fixed;
  left: 20vw;
  height: 100vh;
  width: 60vw;
  box-shadow: 0vh -0.5vh 1vh $shadow-color;
  z-index: 1;
}
</style>


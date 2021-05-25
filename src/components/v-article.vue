<template>
  <div class="v-article">
    <div class="content-article">
      <div class="content-article__img">
        <img :src=img alt="logo"/>
      </div>
      <div class="h1 content-article__title text-center">
        TITLE
      </div>
      <div class="content-article__text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
import Dummy from "dummyjs";

export default {
  name: "v-article",
  data() {
    return {
      text: Dummy.text(400),
      img: Dummy.img(300, 300)
    }
  }
}
</script>

<style lang="scss">
.v-article {
  min-height: calc(100vh - 470px);
  border: 1px solid $gray-500;
  margin: 10px 0;
  border-radius: 10px;
  background: $white;
}

.content-article {
  &__img {
    img {
      object-fit: cover;
      width: 100%;
      height: 200px;
      filter: blur(5px);
    }
    margin-bottom: 10px;
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
  }

  &__text {
    margin: 15px 10px;
  }

  &__title {
    margin-top: 20px;
  }
}
</style>
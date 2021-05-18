<template>
<a href="#"  id="v-CategoryElement">
  <div  id="content-category">
    <img  id="img-category" :src=img_dummy />
    <p  id="text-category">{{dummy_text}}</p>
  </div>
</a>
</template>

<script>
import Dummy from "dummyjs";
export default {
  name: "v-CategoryElement",
  data(){
    return {
      img_dummy: Dummy.img(150, 150),
      dummy_text: Dummy.text(2)
    }
  }
}
</script>

<style lang="scss">
#v-CategoryElement{
  & div:hover{
    box-shadow: inset 0 0 8px $shadow-color;
    & p{
      color: $blue-color-style;
    }
  }
}
#content-category{
  position: relative;
  font-family: DNSRotondaC;
  width: 190px;
  height: 230px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 20px;
  box-shadow: 0 0 8px $shadow-color;
  border-radius: 10px;
  z-index: 3;
  background: $main-color;
}
#img-category{
  z-index: 3;
  position: relative;
  margin: 20px;
}
#text-category{
  z-index: 3;
  position: absolute;
  bottom: 10px;
  width: 190px;
  text-align: center;
  color: $font-color;
  font-size: 16px;
}
</style>
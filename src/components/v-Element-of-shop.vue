<template>
  <div id="v-Element-of-shop">
    <div class="element">
      <img class="img-element" :src=img_dummy>
      <a href="#" class="text-element">{{dummy_text}}</a>
      <p class="price-element"> 0 000 ‡</p>
      <button class="add-to-cart-button"> Купить</button>
    </div>
  </div>

</template>

<script>
import Dummy from "dummyjs";
export default {
  name: "v-Element-of-shop",
  data(){
    return {
      img_dummy: Dummy.img(150, 150),
      dummy_text: Dummy.text(20),
      color_of_button: "$blue-color-style"
    }
  }
}
</script>

<style lang="scss">
#v-Element-of-shop{
  font-family: DNSRotondaC;
}
.add-to-cart-button{
  font-family: DNSRotondaC;
  color: $main-color;
  position: absolute;
  right: 1.5vh;
  top:6vh;
  background: $blue-color-style;
  width: 7vw;
  height: 4vh;
  border-radius: 1vh;
  border: 0vh;
  box-shadow: inset 0vh 0vh 1vh $shadow-color;
  z-index: 3;
  &:hover{
    background: $button-color-style;
  }
}
.price-element{
  position: absolute;
  top: -2.5vh;
  right: 1.5vh;
  font-size: 3.5vh;
}
.img-element{
  position: absolute;
  width: auto;
  height: 16vh;
  margin-left: 1.5vw;
  margin-top: 2vh;
}
.text-element{
  z-index: 3;
  position: absolute;
  left: 10vw;
  top:1vh;
  margin-left: 1vw;
  margin-top: 1vh;
  font-size:2vh ;
  width: 36vw;
  color:$font-color;
}
.element{
  position: relative;
  margin-left: 2vw;
  margin-top: 2vh;
  height: 20vh;
  width: 56vw;
  border-radius: 0.5vh;
  box-shadow: 0vh 0vh 1vh $shadow-color;
  z-index: 2;
}
</style>
<template>
  <div id="v-Element-of-shop">
    <div id="content-element">
      <img id="img-element" :src=img_dummy alt="some photo">
      <a href="#" id="text-element">{{ dummy_text }}</a>
      <p id="price-element"> 0 000 ‡</p>
      <button id="add-to-cart-button" @click="add_to_cart_button=!add_to_cart_button">Купить</button>
      <p id="code-of-product">Код товара: 0000000</p>
    </div>
    <div id="add-to-cart-button-pressed" v-show="add_to_cart_button">
      <div id="add-to-cart-content">
        <p id="add-to-cart-text">
         Вы добавили "{{dummy_text}}" в корзину.
          <br/>
          <br/>
          <br/>
          Хотите продолжить покупки?
        </p>
        <button id="close-add-to-cart-window" @click="add_to_cart_button=!add_to_cart_button">
          Продолжить покупки
        </button>
        <button id="go-to-cart-button" href="#">Перейти в корзину</button>
      </div>
    </div>
  </div>

</template>

<script>
import Dummy from "dummyjs";

export default {
  name: "v-Element-of-shop",
  data() {
    return {
      add_to_cart_button: false,
      img_dummy: Dummy.img(150, 150),
      dummy_text: Dummy.text(20),
      color_of_button: "$blue-color-style"
    }
  }
}
</script>

<style lang="scss">
#add-to-cart-button-pressed {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(0.5vh);
  background: #49AEFF97;
}
#add-to-cart-content {
  position: relative;
  margin-top: 25vh;
  margin-left: 35vw;
  margin-right: 35vw;
  width: 30vw;
  height: 25vh;
  box-shadow: inset 0 0 1vh $blue-color-style;
  border-radius: 1.5vw;
  background: $main-color;
}
#add-to-cart-text{
  position: absolute;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 3vh;
  text-align: center;
  font-size: 1vw;
}
#close-add-to-cart-window, #go-to-cart-button{
  font-family: DNSRotondaC;
  color: $main-color;
  position: absolute;
  bottom: 2vh;
  width: 7vw;
  height: 4vh;
  border-radius: 0.5vw;
  border: 0;
  background: $blue-color-style;
  box-shadow: inset 0 0 1vh $shadow-color;
  font-size: 0.8vw;
  cursor: pointer;
  &:hover {
    background: $button-color-style;
  }
}
#close-add-to-cart-window{
  left: 2vw;
}
#go-to-cart-button{
  right: 2vw;
}
#v-Element-of-shop {
  font-family: DNSRotondaC;
}

#add-to-cart-button {
  font-family: DNSRotondaC;
  color: $main-color;
  position: absolute;
  right: 1vw;
  top: 6vh;
  background: $blue-color-style;
  width: 7vw;
  height: 4vh;
  border-radius: 0.5vw;
  border: 0;
  box-shadow: inset 0 0 1vh $shadow-color;
  z-index: 3;
  font-size: 1vw;
  cursor: pointer;
  &:hover {
    background: $button-color-style;
  }
}

#price-element {
  position: absolute;
  top: -2.5vh;
  right: 1vw;
  font-size: 2vw;
}

#img-element {
  position: absolute;
  width: 8vw;
  margin: 2vh;
  height: 8vw;
}

#text-element {
  z-index: 3;
  position: absolute;
  left: 10vw;
  margin-left: 1vh;
  margin-top: 2vh;
  font-size: 1vw;
  width: 36vw;
  color: $font-color;

  &:hover {
    color: $blue-color-style;
  }
}

#code-of-product {
  z-index: 3;
  position: absolute;
  right: 1vw;
  font-size: 1.5vh;
  bottom: 1vh;
  color: #828282;
}

#content-element {
  background: $main-color;
  position: relative;
  margin-left: 2vh;
  margin-top: 2vh;
  height: 20vh;
  width: 58vw;
  border-radius: 0.5vh;
  box-shadow: 0 0 1vh $shadow-color;
  z-index: 2;
}
</style>
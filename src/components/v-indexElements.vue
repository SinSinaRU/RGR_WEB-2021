<template>
  <div id="v-indexElements">
   <!-- <img id="MyImg" :src="require('../assets/Images/ME.jpg')" alt="My Img">
    <p id="photoText">
      Моя фотография
    </p>
    <p id="groupText">
      Группа: ПИ/б-18-1-о
    </p>
    <p id="nameText">
      Студент: Данилов Даниил Андреевич
    </p>
    -->
  </div>
  <div id="content">
    <v-element-of-shop/>
  <!--  <img data-dummy width="400" height="300" />
    <p>{{dummy_text}}</p>-->
  </div>


</template>

<script>
import vElementOfShop from './v-Element-of-shop'
import Dummy from "dummyjs";
export default {
  name: "v-indexElements",
  components: {vElementOfShop},
  data(){
    return {
      dummy_text: Dummy.text(10000),
    }
  }
}

</script>

<style lang="scss">
.generic-list{
  position: relative;
  top:6vh;
}

#v-indexElements{
  position: fixed;
  left:20vw;
  height: 100vh;
  width: 60vw;
  box-shadow: 0vh -0.5vh 1vh $shadow-color;
  z-index: 1;
}
#content{
  position: relative;
  top: 7vh;
  left:20vw;
  width: 60vw;
}
#MyImg{
  position: relative;
  top: 50px;
  left: 2vw;
  border-radius: 7px;
  max-width: 35vh;
}
#photoText{
  position: relative;
  top:30px;
  left: 2vw;
  max-width: 35vh;
  text-align: center;
  font-size: 180%;
  color: #b6b6b6;
}
#groupText {
  position: absolute;
  left: 25vw;
  top: 50px;
  font-size: 250%;
}
#nameText{
  position: absolute;
  top: 150px;
  left: 25vw;
  font-size: 200%;
}
</style>


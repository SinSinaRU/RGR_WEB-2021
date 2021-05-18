<template>
  <header class="v-Header">
    <nav>
      <a id="logo" href="#">
        <h1 id="textlogo">
          NOTDNS
        </h1>
      </a>
      <div id="menu1" @click="visible= !visible">
        <h1 class="textmenu">
          Категории товаров
        </h1>
        <transition name="fade">
          <ul id="category" v-show="visible" @mouseleave="visible=false">
            <a href='#' id="category1">
              <p class="category-text">
                Компьютеры и ноутбуки
              </p>
            </a>
            <a href='#' id="category2">
              <p class="category-text">
                Компьютерные комплектующие
              </p>
              <ul id="sub-category2">
                <a href='#' id="sub-category2-1">
                  <p class="sub-category-text">
                    Процессоры
                  </p>
                </a>
                <a href="#" id="sub-category2-2">
                  <p class="sub-category-text">
                    Материнская плата
                  </p>
                </a>
                <a href="#" id="sub-category2-3">
                  <p class="sub-category-text">
                    Оперативная память
                  </p>
                </a>
                <a href="#" id="sub-category2-4">
                  <p class="sub-category-text">
                    Видеокарта
                  </p>
                </a>
                <a href="#" id="sub-category2-5">
                  <p class="sub-category-text">
                    Корпуса
                  </p>
                </a>
                <a href="#" id="sub-category2-6">
                  <p class="sub-category-text">
                    Блоки питания
                  </p>
                </a>
                <a href="#" id="sub-category2-7">
                  <p class="sub-category-text">
                    SSD и HDD
                  </p>
                  <ul id="sub-sub-category2-7">
                    <a href="#" id="sub-category2-7-1">
                      <p class="sub-category-text">
                        SSD
                      </p>
                    </a>
                    <a href="#" id="sub-category2-7-2">
                      <p class="sub-category-text">
                        HDD
                      </p>
                    </a>
                  </ul>
                </a>
                <a href="#" id="sub-category2-8">
                  <p class="sub-category-text">
                    Охлаждения компьютера
                  </p>
                </a>
                <a href="#" id="sub-category2-9">
                  <p class="sub-category-text">
                    Моддинг и обслуживание
                  </p>
                </a>
              </ul>
            </a>
            <a href='#' id="category3">
              <p class="category-text">
                Компьютерная перефирия
              </p>
              <ul id="sub-category3">
                <a href="#" id="sub-category3-1">
                  <p class="sub-category-text">
                    Мониторы
                  </p>
                </a>
                <a href="#" id="sub-category3-2">
                  <p class="sub-category-text">
                    Клавиатуры
                  </p>
                </a>
                <a href="#" id="sub-category3-3">
                  <p class="sub-category-text">
                    Мыши
                  </p>
                </a>
                <a href="#" id="sub-category3-4">
                  <p class="sub-category-text">
                    Коврики для мыши
                  </p>
                </a>
                <a href="#" id="sub-category3-5">
                  <p class="sub-category-text">
                    Наушники
                  </p>
                </a>
                <a href="#" id="sub-category3-6">
                  <p class="sub-category-text">
                    Веб-камеры
                  </p>
                </a>
                <a href="#" id="sub-category3-7">
                  <p class="sub-category-text">
                    Компьютерные кабели и переходники
                  </p>
                </a>
                <a href="#" id="sub-category3-8">
                  <p class="sub-category-text">
                    Внешние накопители данных
                  </p>
                </a>
              </ul>
            </a>
            <a id="category4">
              <p class="category-text">
                Игры и игровые
                <br/>
                приставки
              </p>
            </a>
          </ul>
        </transition>
      </div>
      <a href="#" id="menu2">
        <h1 class="textmenu">
          Новости и акции
        </h1>
      </a>
      <a href="#" id="menu3">
        <h1 class="textmenu">
          Обратная связь
        </h1>
      </a>
      <a href="#" id="menu4">
        <h1 class="textmenu">
          Корзина
        </h1>
      </a>
      <a href="#" id="menu5">
        <h1 class="textmenu">
          Техническая поддержка
        </h1>
      </a>
    </nav>
  </header>
</template>

<script>

export default {
  name: "v-Header",
  data() {
    return {
      visible: false
    }
  }
}

</script>

<style lang="scss">

.v-Header {
  z-index: 1000;
  position: fixed;
  font-family: 'DNSRotondaC';
  height: 6vh;
  box-shadow: 0 1.3vh 1vh -1vh $shadow-color;
  background: $main-color;
  width: 100vw;
}

#menu1, #menu2, #menu3, #menu4, #menu5, #menu6, #logo {
  position: absolute;
  color: $main-color;
  text-align: center;
  width: 12vw;
  height: 6vh;
  margin-left: 2vw;
  box-sizing: border-box;
  &:hover {
    border-bottom: 0.5vh solid $blue-color-style;
  }
}
#logo {
  background: $blue-color-style;
}

@for $i from 1 to 5 {
  #category#{$i} {
    position: absolute;
    background: $blue-color-style;
    left: 0;
    top: $i*6vh;
    height: 6vh;
    width: 12vw;
    text-align: center;
    box-shadow: -0.1vh -0.3vh 0.6vh $shadow-color;
    @if ($i==4) {
      border-radius: 0 0 1.3vh 1.3vh;
    }
    @if ($i==2) {
      &:hover > #sub-category2 {
        visibility: visible;
        opacity: 1;
        transition: .4s linear;
      }
    }
    @if ($i==3) {
      &:hover > #sub-category3 {
        visibility: visible;
        opacity: 1;
        transition: .4s linear;
      }
    }

    @if (($i==1) or ($i==3)) {
      & p {
        position: relative;
        top: 0;
      }
    }

    &:hover {
      box-shadow: inset 0.3vh 0.8vh 2vh 0.2vh $menu-inside-shadow;
    }
  }
}

@for $i from 1 to 3 {
  #sub-category2-7-#{$i} {
    position: absolute;
    background: $blue-color-style;
    left: 12vw;
    top: $i*6vh-6vh;
    height: 6vh;
    width: 12vw;
    text-align: center;
    box-shadow: -0.1vh -0.3vh 0.6vh $shadow-color;

    &:hover {
      box-shadow: inset 0.3vh 0.8vh 2vh 0.2vh $menu-inside-shadow;
    }

    @if ($i==2) {
      border-radius: 0 0 1.3vh 0;
    }
    @if ($i==1) {
      border-radius: 0 1.3vh 0 0;
    }
  }
}

@for $i from 1 to 10 {
  #sub-category2-#{$i} {
    position: absolute;
    background: $blue-color-style;
    left: 12vw;
    top: $i*6vh-6vh;
    height: 6vh;
    width: 12vw;
    text-align: center;
    box-shadow: -0.1vh -0.3vh 0.6vh $shadow-color;

    &:hover {
      box-shadow: inset 0.3vh 0.8vh 2vh 0.2vh $menu-inside-shadow;
    }

    @if ($i==9) {
      border-radius: 0 0 1.3vh 1.3vh;
    }
    @if ($i==1) {
      border-radius: 0 1.3vh 0 0;
    }
    @if ($i<8) {
      & p {
        position: relative;
        top: -0.7vh;
      }
    }
    @if ($i==7) {
      &:hover > #sub-sub-category2-7 {
        visibility: visible;
        opacity: 1;
        transition: .4s linear;
      }
    }
  }
}

@for $i from 1 to 9 {
  #sub-category3-#{$i} {
    position: absolute;
    background: $blue-color-style;
    left: 12vw;
    top: $i*6vh-6vh;
    height: 6vh;
    width: 12vw;
    text-align: center;
    box-shadow: -0.1vh -0.3vh 0.6vh $shadow-color;

    &:hover {
      box-shadow: inset 0.3vh 0.8vh 2vh 0.2vh $menu-inside-shadow;
    }

    @if ($i==8) {
      border-radius: 0 0 1.3vh 1.3vh;
    }
    @if ($i==1) {
      border-radius: 0 1.3vh 0 0;
    }
    @if ($i==7) {
      & p {
        position: relative;
        top: -1vh;
      }
    }

  }
}

@for $i from 1 to 6 {
  #menu#{$i} {
    margin-left: $i*4vw+2vw;
    left: $i*12vw;
    box-shadow: 0 -0.5vh 1vh $shadow-color;
    @if ($i==1){}
    cursor: pointer;
  }
}


#textlogo {
  letter-spacing: 0.4vh;
  position: relative;
  top: -2vh;
  font-size: 2vw;
  text-shadow: 0.4vh 0.4vh 1.3vh $add-color;
}

#sub-category3, #sub-sub-category2-7, #sub-category2 {
  visibility: hidden;
  opacity: 0;
  transition: .4s ease-in-out;
}

// ДЛЯ ТЕКСТА
.textmenu {
  position: relative;
  top: 0.35vh;
  font-size: 1vw;
  color: $font-color;
}

.category-text {
  position: relative;
  top: -1vh;
  font-size: 0.9vw;
  text-align: center;
  color: $main-color;
}

.sub-category-text {
  position: relative;
  font-size: 0.9vw;
  text-align: center;
  color: $main-color;
}

.fade-enter-to {
  transition: .4s linear;
  opacity: 1;
}

.fade-leave-active {
  transition: all .4s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
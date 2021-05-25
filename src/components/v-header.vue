<template>
  <div class="v-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top" style="padding: 0;">
      <div class="container">
        <a href="#" class="navbar-brand text-light bg-primary text-center"
           style="font-family: 'DNS RotondaC'; line-height: 70px; width: 180px; height: 70px;  padding: 0; font-size: 40px">
          NOTDNS
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ">
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu" role="button">
                Категории товаров</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Новости и акции</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">О нас</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Обратная связь</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Техническая поддержка</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-center cart">
                <span class="material-icons">shopping_cart</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="offcanvas offcanvas-start" id="menu" aria-labelledby="dropdownMenuLink">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">Категории товаров</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Закрыть"></button>
          </div>
          <ul class="offcanvas-body pt-4 text-center">
            <li><a class="dropdown-item pt-3 " href="#">Компьютеры и ноутбуки</a></li>
            <li class="dropdown-item dropdown pt-3">
              <div class="dropdown-toggle" id="dropdown__first-layout" data-bs-toggle="dropdown" aria-haspopup="false"
                   aria-expanded="false" role="button">Компьютерные комплектующие
              </div>
              <ul class="dropdown-menu" aria-labelledby="dropdown__first-layout">
                <li><a class="dropdown-item" href="#">Процессоры</a></li>
                <li><a class="dropdown-item" href="#">Материнские платы</a></li>
                <li><a class="dropdown-item" href="#">Оперативная память</a></li>
                <li><a class="dropdown-item" href="#">Видекарты</a></li>
                <li><a class="dropdown-item" href="#">Корпуса</a></li>
                <li><a class="dropdown-item" href="#">Блоки питания</a></li>
                <li><a class="dropdown-item" href="#">SSD и HDD</a></li>
                <li><a class="dropdown-item" href="#">Охлаждение компьютера</a></li>
                <li><a class="dropdown-item" href="#">Моддинг и обслуживание</a></li>
              </ul>
            </li>
            <li class="dropdown-item dropdown pt-3">
              <div class="dropdown-toggle" id="dropdown__second-layout" data-bs-toggle="dropdown" aria-haspopup="false"
                   aria-expanded="false" role="button">Компьютерная перефирия
              </div>
              <ul class="dropdown-menu" aria-labelledby="dropdown__second-layout">
                <li><a class="dropdown-item" href="#">Мониторы</a></li>
                <li><a class="dropdown-item" href="#">Клавиатуры</a></li>
                <li><a class="dropdown-item" href="#">Мыши</a></li>
                <li><a class="dropdown-item" href="#">Коврики для мыши</a></li>
                <li><a class="dropdown-item" href="#">Наушники</a></li>
                <li><a class="dropdown-item" href="#">Веб-камеры</a></li>
                <li><a class="dropdown-item" href="#">Компьютерные кабели и переходники</a></li>
                <li><a class="dropdown-item" href="#">Внешние накопители данных</a></li>
              </ul>
            </li>
            <li><a class="dropdown-item pt-3" href="#">Игры и игровые приставки</a></li>
            </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "v-header"
}
</script>

<style lang="scss">
.v-header{
  border-bottom: 1px solid $gray-400;
}
.nav-item {
  padding: 0 0 5px 15px;
}


.cart {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: $blue;

  span {
    padding: 1px;
  }

  &:hover {
    box-shadow: 0 0 10px $shadow-color;
  }
}

a {
  cursor: pointer;

}
</style>
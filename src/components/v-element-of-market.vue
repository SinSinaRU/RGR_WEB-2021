<template>
  <div class="v-element-of-market">
    <div class="product bg-primary h-100">
      <div class="product__content row">
        <img :src=img_dummy alt="" class="product__img col-2"/>
        <a class="product__title col-4 col-sm-6 col-md-7 col-lg-8">{{ text }}</a>
        <p class="product__price text-light h1">000 000‡</p>
        <button class="product__buy-button btn btn-light text-primary" data-bs-toggle="modal"
                data-bs-target="#add-to-cart-window">Купить
        </button>
        <p class="product__code text-light">Код товара: 1000000</p>
      </div>
    </div>
  </div>
  <div class="modal" id="add-to-cart-window">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center">Вы добавили товар в корзину!</h5>
          <button class="close" type="button" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" class="material-icons">close</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Товар "{{ text }}" успешно добавлен в корзину.</p>
          <p class="text-center">Хотите продолжить покупки?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Продолжить покупки</button>
          <button type="button" class="btn btn-primary">Перейти в корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dummy from "dummyjs";

export default {
  name: "v-element-of-market",
  data() {
    return {
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid\n" +
          "atque est eum illum nemo.",
      img_dummy: Dummy.img(150, 150)
    }
  }
}
</script>

<style lang="scss">
.v-element-of-market {
  margin: 10px auto;
  padding: 0;
  height: 160px;
}

.product {
  position: relative;
  border-radius: 5px;

  &__content {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 0 10px;

    &.row {
      margin: 0;
    }
  }

  &__img {
    &.col-2 {
      padding: 10px 10px 10px 5px;
      margin-top: 5px;
    }

    height: 150px;
    width: auto !important;
  }

  &__title {
    margin: 15px 25px 0px -5px !important;
    height: 0;
    color: $white;

    &:hover {
      color: $black;
    }
  }

  &__price {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5px !important;
    padding-top: 10px;
    padding-right: 20px;
    width: auto !important;

  }

  &__code {
    position: absolute;
    width: auto !important;
    right: 0;
    bottom: 0;
    padding: 0 !important;
    margin: 10px;
  }

  &__buy-button {
    &.btn {
      width: auto;
      height: auto;
    }

    position: absolute;
    right: 0;
    bottom: 40px !important;
    margin: auto 10px;
  }

  &:hover {
    box-shadow: 0 0 10px $shadow-color;
  }
}

@include media-breakpoint-down(lg) {
  .product {
    &__title {
      font-size: 1rem;
    }
  }
}


@include media-breakpoint-down(md) {
  .product {
    &__title {
      font-size: 1rem;
    }
  }
}


@include media-breakpoint-down(sm) {
  .product {
    &__title {
      font-size: 0.65rem;
    }

    &__price {
      font-size: 1.2rem !important;
    }

    &__code {
      font-size: 0.7rem;
    }

    &__buy-button {
      font-size: 0.8rem !important;
    }
  }

}

@media (max-width: 375px) {
  .product {

    &__price {
      font-size: 1rem !important;
    }

    &__code {
      font-size: 0.6rem;
    }
  }
}


@media (max-width: 320px) {
  .product {
    &__title {
      font-size: 0.6rem;
    }

    &__price {
      font-size: 0.9rem !important;
    }

    &__code {
      font-size: 0.5rem;
    }

    &__buy-button {
      font-size: 0.6rem !important;
    }
  }
}
</style>
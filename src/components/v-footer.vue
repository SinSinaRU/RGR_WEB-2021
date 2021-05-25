<template>
  <footer class="v-footer bg-dark">
    <div class="container">
      <div class="footer row">
        <div class="footer__map-of-site col-6 d-flex flex-column text-center">
          <a href="#" class="text-light mb-4">
            Новости и акции
          </a>
          <a href="#" class="text-light mb-4">
            О нас
          </a>
          <a href="#" class="text-light mb-4">
            Обратная связь
          </a>
          <a href="#" class="text-light mb-4">
            Техническая поддержка
          </a>
          <a href="#" class="text-light mb-4">
            Корзина
          </a>
        </div>
        <div class="footer__address-side col-6 d-flex flex-column text-center">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363542.5485072186!2d33.35783833762813!3d44.61387304981293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409525ef659144f5%3A0xbd2da7afff4d34cc!2z0KHQtdCy0LDRgdGC0L7Qv9C-0LvRjA!5e0!3m2!1sru!2s!4v1621356922248!5m2!1sru!2s"
              class="footer__google-map" allowfullscreen="" loading="lazy">
          </iframe>
          <div class="h5 text-light footer__address">
            Наш адрес:
          </div>
          <div class="text-light footer__address">
            г.Севастополь, ул._________, д.____
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "v-footer"
}
</script>

<style lang="scss">

.v-footer {
  position: relative;
  bottom: 0;
  height: 400px;
}
.footer {
  width: 100%;
  position: relative;

  &__address-side::before, &__address-side::after, &::after {
    content: "";
    position: absolute;
    margin-top: 40px;
    height: 95%;
    width: 2px;
    background: $gray-700;
    border-radius: 2px;
  }

  &__address-side {
    position: relative;

    &::after {
      right: -30px;
    }

    &::before {
      left: 0
    }
  }

  &__google-map {
    height: 250px;
    width: 400px;
    margin-top: 40px;
    margin-left: 50px;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  &__map-of-site {
    margin: 80px 0 0 0;
    padding: 40px 0;
    a {
      &.text-light:hover {
        color: $blue !important;
      }
    }
  }
}

@include media-breakpoint-down(sm) {

}
@include media-breakpoint-down(md) {
  .footer {
    &__map-of-site{
      font-size: 0.8rem !important;
    }
    &__address {
      &.h5 {
        font-size: 1rem;
      }

      padding-top: 50px;
      font-size: 0.7rem;
    }

  }
}
@include media-breakpoint-down(lg) {
  .footer {
    &__google-map {
      display: none;
    }

    &__address-side::after, &::after {
      display: none;
    }

    &__address {
      &.h5 {
        font-size: 1.2rem;
      }

      padding-top: 50px;
      font-size: 0.9rem;
    }

  }
}
</style>
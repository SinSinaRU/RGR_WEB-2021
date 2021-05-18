<template>
  <footer class="v-footer">
    <div id="right-side">
      <div class="vertical-line"></div>
      <a href="#" id="about-us" class="footer-text footer-url-1">
        О нас
      </a>
      <a href="#" id="feedback" class="footer-text footer-url-2">
        Обратная связь
      </a>
      <a href="#" id="news-and-actions" class="footer-text footer-url-3">
        Новости и акции
      </a>
      <a href="#" id="support" class="footer-text footer-url-4">
        Техническая поддержка
      </a>
    </div>
    <div id="left-side">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d363542.5485072186!2d33.35783833762813!3d44.61387304981293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409525ef659144f5%3A0xbd2da7afff4d34cc!2z0KHQtdCy0LDRgdGC0L7Qv9C-0LvRjA!5e0!3m2!1sru!2s!4v1621356922248!5m2!1sru!2s"
          id="google-map" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      <h1 class="footer-text addresses">
        Наши адреса:
      </h1>
      <p class="footer-text address-1">г.Севастополь, ул._________, д.____</p>
      <p class="footer-text address-2">г.Севастополь, ул._________, д.____</p>
      <p class="footer-text address-3">г.Севастополь, ул._________, д.____</p>
      <p class="footer-text address-4">г.Севастополь, ул._________, д.____</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "v-footer"
}
</script>

<style lang="scss">
.vertical-line {
  position: absolute;
  top: 3vh;
  height: 30vh;
  width: 2px;
  background: #4C4C4CB2;
  left: 45vw;
}

.v-footer {
  font-family: DNSRotondaC;
  z-index: 1000;
  position: relative;
  width: 100vw;
  height: 35vh;
  top: 10vh;
  background: #31acfd;
  box-shadow: 0 -1.3vh 1vh -1vh $shadow-color;
}

#google-map {
  position: absolute;
  right: 8vw;
  top: 3vh;
  border-radius: 1vw;
  border: 0.5vw solid $blue-color-style;
  box-shadow: 1vw -1.3vh 2vh -1vh $shadow-color;
  width: 20vw;
  height: 30vh;
}

.footer-text {
  position: absolute;
  margin-top: 3vh;
  font-size: 0.9vw;
  color: $font-color;
}

@for $i from 1 to 5{
  .footer-url-#{$i}{
    top: 4vh*$i+1vh;
    margin-left: 15vw;
    color: $font-color;
    text-align: center;
    width: 15vw;
    font-size: 1.2vw;
    &:hover{
      color:$main-color;
    }
  }
}
@for $i from 1 to 5 {
  .address-#{$i} {
    top: 6vh*$i+1vh;
    right: 35vw;
  }
}

.addresses {
  right: 41vw;
  font-size: 1.35vw;
}
</style>
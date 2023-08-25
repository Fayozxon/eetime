<script>

</script>

<template>
  
  <footer class="footer">
    <div class="container">
        
      <div class="footer__social">
        <a href="https://github.com/Fayozxon">
          <img src="../assets/logo-github.svg" alt="Github logo">
          Github
        </a>
        <a href="https://dribbble.com/fayozxon">
          <img src="../assets/logo-dribbble.svg" alt="Dribbble logo">
          Dribbble
        </a>
        <a href="https://t.me/fayozhons">
          <img src="../assets/logo-telegram.svg" alt="Telegram logo">
          Telegram
        </a>
      </div>

    </div>
  </footer>

</template>

<style lang="scss" scoped>
@import '../main.scss';

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: $clr-bg-dk-blue;
  padding: 60px 0;

  &__social {
    display: flex;
    gap: 50px;

    a {
      display: flex;
      align-items: center;
      gap: 15px;
      color: $clr-white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>

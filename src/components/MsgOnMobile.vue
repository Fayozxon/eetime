<script>

</script>

<template>
  
  <section class="msg-bg">
      <div class="box">
        <img src="../assets/icon-compass.svg" alt="Compass Icon">
        <p class="text">
            Currently, the website is not available on small screens.
        </p>
      </div>
  </section>

</template>

<style lang="scss">
@import '../main.scss';

@media (max-width: 990px) {
    .main {
        display: none;
    }
}

.msg-bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $clr-bg-black;
    align-items: center;
    justify-content: center;
    padding: 30px;
    z-index: 10;
    display: none;

    @media (max-width: 990px) {
        display: flex;
    }

    .box {
        background: $clr-bg-dk-blue;
        border: 2px solid $clr-lt-blue;
        border-radius: 10px;
        padding: 40px;
        padding-top: 35px;
        max-width: 290px;
        text-align: center;
        color: $clr-lt-blue;
        font-weight: 700;

        .text {
            padding-top: 20px;
        }
    }
}

</style>

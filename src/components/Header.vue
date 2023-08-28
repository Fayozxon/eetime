<script>
export default {
    data() {
        return {
            isFullScreen: false
        }
    },
    methods: {
        toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
                this.isFullScreen = true;
            } else if (document.exitFullscreen) {
                document.exitFullscreen();
                this.isFullScreen = false;
            }
        }
    }
}
</script>

<template>
  
  <header class="header" id="header">
    <div class="container">
        <!-- text animation -->
        <h2 class="header__animation">EEt<span>i</span>me</h2>
        <!-- info -->
        <div class="header__info">
            <h1 class="title">
                CLOCK <span>style</span> SCREENSAVERS
            </h1>
            <p class="text">
                Find a clock style that matches your personality and use it as a screensaver and to take stunning photos of your pc setup. <a href="#feedback">Feedback</a>
            </p>
        </div>
        <!-- features -->
        <ul class="header__features">
            <li class="item">
                <img src="../assets/icon-star.svg">
                Completely Free
            </li>
            <li class="item">
                <img src="../assets/icon-time.svg">
                No Installation
            </li>
            <li class="item">
                <img src="../assets/icon-settings.svg">
                Customizable
            </li>
        </ul>
        <!-- full screen btn -->
        <button class="full-screen btn" :class="{active: isFullScreen}" @click="toggleFullScreen">Full Screen</button>
    </div>
  </header>

</template>

<style lang="scss" scoped>
@import '../main.scss';

.header {
    padding-top: 80px;

    .container {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: start;
    }

    .full-screen.btn {
        position: absolute;
        right: 40px;
        top: 230px;
    }

    &__animation {
        position: absolute;
        left: 55%;
        top: 135px;
        font-size: $fs-lg;
        font-weight: 800;
        color: $clr-grey;

        @media (max-width: 1280px) {
            display: none;
        }

        span {
            opacity: 0.5;
            animation: flash 1.8s ease infinite;
        }
    }

    &__info {
        max-width: 650px;

        .text {
            padding-top: 30px;
            max-width: 425px;
        }
    }

    &__features {
        list-style: none;
        padding: 15px 30px;
        padding-right: 35px;
        background: $clr-bg-dk-blue;
        color: $clr-lt-blue;
        border: 2px solid $clr-lt-blue;
        border-radius: 10px;

        .item {
            padding: 10px 0;
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 700;
        }
    }
}

// animations
@keyframes flash {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}

</style>

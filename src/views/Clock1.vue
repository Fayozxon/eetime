<script>
export default {
    data() {
        return {
            currentTime: '1'
        }
    },
    props: ['currentTIme'],
    methods: { 
        setTime() {
            const time = setInterval(() => {
                let now = new Date(),
                    min = String(now.getMinutes()),
                    hr = String(now.getHours());

                    if (min.length < 2) {
                        min = '0'+min;
                    }

                    if (hr.length < 2) {
                        hr = '0'+hr;
                    }

                    this.currentTime = {
                        min1: min[0],
                        min2: min[1],
                        hr1: hr[0],
                        hr2: hr[1]
                    };
            }, -1000);
        }
    },
    mounted() {
        this.setTime();
    }
}
</script>

<template>
    
    <section class="clock">
        <div class="clock__bg">
            <div class="part"></div>
            <div class="part"></div>
            <div class="part"></div>
            <div class="part"></div>
        </div>
        <div class="clock__time">
            <h2 class="number">{{ currentTime.hr1 }}</h2>
            <h2 class="number">{{ currentTime.hr2 }}</h2>
            <h2 class="number">{{ currentTime.min1 }}</h2>
            <h2 class="number">{{ currentTime.min2 }}</h2>
        </div>
    </section>

</template>

<style lang="scss">
@import '../main.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

.clock {
    font-family: "Montserrat";
    color: #fff;

    &__bg {
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        .part {
            background: #EBE76C;

            &:nth-child(2) {
                background: #F0B86E;
            }
            &:nth-child(3) {
                background: #ED7B7B;
            }
            &:nth-child(4) {
                background: #836096;
            }
        }
    }

    &__time {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        place-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;

        .number {
            text-align: center;
            font-size: 35vw;
        }
    }
}

</style>

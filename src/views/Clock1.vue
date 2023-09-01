<script>
export default {
    data() {
        return {
            currentTime: '1',
            color1: '#EBE76C',
            color2: '#F0B86E',
            color3: '#ED7B7B',
            color4: '#836096',
            textTheme: 'light',
            preMadeColors: [
                ['#EBE76C', '#F0B86E', '#ED7B7B', '#836096'],
                ['#C5DFF8', '#A0BFE0', '#7895CB', '#4A55A2'],
                ['#FE7BE5', '#974EC3', '#504099', '#313866'],
                ['#001253', '#3E6D9C', '#FD841F', '#E14D2A']
            ]
        }
    },
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
        <!-- settings -->
        <div class="settings-panel">
            <button class="btn" onclick="history.back()">Back</button>
            <h3 class="title">Color palette</h3>
            <p class="label">Text theme</p>
            <div class="two-columns">
                <button class="btn" @click="textTheme = 'light'" :class="{active: textTheme == 'light'}">Light</button>
                <button class="btn" @click="textTheme = 'dark'" :class="{active: textTheme == 'dark'}">Dark</button>
            </div>
            <p class="label">Choose palette colors</p>
            <div class="four-columns">
                <input type="color" v-model="color1">
                <input type="color" v-model="color2">
                <input type="color" v-model="color3">
                <input type="color" v-model="color4">
            </div>
            <p class="label">Pre-made</p>
            <div class="two-columns">
                <div
                    v-for="colors in preMadeColors"
                    @click="color1 = colors[0], color2 = colors[1], color3 = colors[2], color4 = colors[3]"
                    :style="`background: linear-gradient(to right, ${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`"
                    class="pre-made"
                ></div>
            </div>
            <!-- credits -->
            <p class="credits">
                ✨ Inspiration from android apps.
            </p>
        </div>
        <!-- clock -->
        <div class="clock__bg">
            <div class="part" :style="`background: ${color1}`"></div>
            <div class="part" :style="`background: ${color2}`"></div>
            <div class="part" :style="`background: ${color3}`"></div>
            <div class="part" :style="`background: ${color4}`"></div>
        </div>
        <div class="clock__time" :class="{dark: textTheme == 'dark'}">
            <h2 class="number">{{ currentTime.hr1 }}</h2>
            <h2 class="number">{{ currentTime.hr2 }}</h2>
            <h2 class="number">{{ currentTime.min1 }}</h2>
            <h2 class="number">{{ currentTime.min2 }}</h2>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@import '../main.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');

.clock {
    font-family: "Montserrat";
    color: #fff;

    .pre-made {
        height: 40px;
        border-radius: 7px;
        cursor: pointer;
    }

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

        &.dark {
            color: #1f1f1f;
        }

        .number {
            text-align: center;
            font-size: 35vw;
        }
    }
}

</style>

<script>
export default {
    data() {
        return {
            currentTime: ''
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

                    this.currentTime = `${hr}:${min}`;
            }, -1000);
        },
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
            <!-- credits -->
            <p class="credits">
                ✨ Inspiration from a DVD screen.
            </p>
        </div>
        <!-- clock -->
        <div class="clock-box">
            <h2>{{ currentTime }}</h2>
        </div>
    </section>

</template>

<style lang="scss">
@import '../main.scss';
@import url('https://fonts.googleapis.com/css2?family=K2D:wght@600&display=swap');

.clock {
    background: #000;

    .clock-box {
        position: fixed;
        top: 50%;
        left: 50%;
        font-family: 'K2D';
        font-size: 64px;
        color: #491BFF;
        text-align: center;

        &::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 42px;
            background: #491BFF;
            border-radius: 50%;
        }

        &::after {
            content: '';
            position: absolute;
            top: 115%;
            left: 50%;
            transform: translateX(-50%);
            width: 54px;
            height: 16px;
            background: #000;
            border-radius: 50%;
        }
    }
}
</style>

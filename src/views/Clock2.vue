<script>
export default {
    data() {
        return {
            currentTime: '',
            currentDate: ''
        }
    },
    methods: { 
        setTime() {
            const time = setInterval(() => {
                let now = new Date(),
                    min = String(now.getMinutes()),
                    hr = String(now.getHours()),
                    day = now.getDay(),
                    month = now.getMonth(),
                    date = now.getDate();

                    if (min.length < 2) {
                        min = '0'+min;
                    }
                    if (hr.length < 2) {
                        hr = '0'+hr;
                    }

                    switch(day) {
                        case 1:
                            day = 'Monday';
                            break;
                        case 2:
                            day = 'Tuesday';
                            break;
                        case 3:
                            day = 'Wednesday';
                            break;
                        case 4:
                            day = 'Thursday';
                            break;
                        case 5:
                            day = 'Friday';
                            break;
                        case 6:
                            day = 'Saturday';
                            break;
                        case 7:
                            day = 'Sunday';
                    }

                    switch(month) {
                        case 0:
                            month = 'January';
                            break;
                        case 1:
                            month = 'February';
                            break;
                        case 2:
                            month = 'March';
                            break;
                        case 3:
                            month = 'April';
                            break;
                        case 4:
                            month = 'May';
                            break;
                        case 5:
                            month = 'June';
                            break;
                        case 6:
                            month = 'July';
                            break;
                        case 7:
                            month = 'August';
                            break;
                        case 8:
                            month = 'September';
                            break;
                        case 9:
                            month = 'October';
                            break;
                        case 10:
                            month = 'November';
                            break;
                        case 11:
                            month = 'December';
                            break;
                    }

                    this.currentTime = `${hr}:${min}`;
                    this.currentDate = `${day}, ${month} ${date}`;
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
            <h3 class="title">Synthwave boy</h3>
            <!-- credits -->
            <p class="credits">
                ✨ Inspiration from <a target="_blank" href="https://www.youtube.com/@LofiGirl">Lofi Girl</a>.
            </p>
        </div>
        <!-- clock -->
        <div class="clock__box">
            <h2 class="time">{{ currentTime }}</h2>
            <h3 class="date">{{ currentDate }}</h3>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@import '../main.scss';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

.clock {
    background: url('../assets/img/img-synthwave-boy.jpg');
    background-size: cover;
    background-position: center;
    font-family: 'Poppins';
    color: #fff;

    &__box {
        position: fixed;
        left: 100px;
        bottom: 100px;
        text-shadow: 0 10px 20px rgba(0,0,0,0.25);
        line-height: 1;

        .time {
            font-size: 135px;
            font-weight: bold;
        }

        .date {
            font-size: 32px;
        }
    }
}

</style>

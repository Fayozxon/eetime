<script>
import clocksData from '../../public/data.json';

export default {
    props: ['filterType', 'lovedClocks', 'isLovedShown'],
    data() {
        return {
            clocksList: clocksData.data
        }
    },
    computed: {
        clocks() {
            if (this.isLovedShown) {
                return this.clocksList.filter(clock => this.lovedClocks.includes(clock.id));
            }

            if (this.filterType != 'all') {
                return this.clocksList.filter(clock => clock.category.includes(this.filterType));
            }
            
            return this.clocksList;
        }
    }
}
</script>

<template>
  
    <section class="previews-section">
        <div class="container">

            <div class="previews-section__box">
                <!-- card -->
                <div v-for="clock in clocks" class="card">
                    <img :src="`/previews/clock-${clock.id}.png`" class="preview" alt="Preview Image">
                    <div class="card__overlay">
                        <div class="card__overlay--info">
                            <h3>N{{ clock.id }} {{ clock.name }}</h3>
                            <p>
                                <span v-for="category in clock.category">
                                    {{ category }}
                                </span>
                            </p>
                        </div>
                        <button
                          class="card__overlay--love"
                          :class="{active: lovedClocks.includes(clock.id)}"
                          @click="$emit('addRemoveLoved', clock.id)"
                        >
                            <img src="../assets/icon-heart.svg" alt="">
                        </button>
                        <router-link :to="`/clock/${clock.id}`" class="card__overlay--action">
                            <img src="../assets/icon-arrow-up.svg" alt="">
                        </router-link>
                    </div>
                </div>
                <!-- /card -->
            </div>
            
            <a href="#header" class="btn">
                <img src="../assets/icon-arrow-up.svg">
            </a>

        </div>
    </section>

</template>

<style lang="scss">
@import '../main.scss';

.previews-section {

    &__box {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;

        @media (max-width: 1280px) {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
        }

        .card {
            position: relative;
            background: $clr-bg-dk-blue;
            border-radius: 10px;
            overflow: hidden;

            .preview {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            &__overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(to bottom, rgba(0,0,0,0), #050608);
                opacity: 0;
                transition: all 200ms ease-in-out;

                &--info {
                    max-width: 70%;
                    position: absolute;
                    bottom: 30px;
                    left: 30px;

                    h3 {
                        font-weight: 700;
                        text-transform: capitalize;
                    }

                    p {
                        display: flex;
                        gap: 10px;
                        row-gap: 0px;
                        flex-wrap: wrap;
                        text-transform: uppercase;
                        color: $clr-lt-blue;
                        font-weight: 700;
                        font-size: $fs-sm;
                    }
                }

                &--love {
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    padding: 5px 10px;
                    padding-top: 10px;
                    border-radius: 7px;
                    border: 2px solid $clr-st-dk-blue;
                    background: $clr-bg-dk-blue;
                    cursor: pointer;
                    transition: all 200ms ease-in-out;

                    img {
                        width: 24px;
                    }

                    &.active {
                        background: #CB0049;
                        border-color: $clr-lt-blue;
                    }
                }

                &--action {
                    position: absolute;
                    right: 30px;
                    bottom: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    border: none;
                    background: $clr-white;
                    cursor: pointer;
                    
                    &:hover img {
                        transform: rotate(45deg);
                    }
                    
                    img {
                        transform: rotate(90deg);
                        transition: all 200ms ease-in-out;
                    }
                }
            }

            &:hover .card__overlay {
                opacity: 1;
            }
        }
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        background: $clr-white;
        margin-top: 30px;
        margin-left: auto;
    }
}

</style>
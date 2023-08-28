<script>
import clocksData from '../../public/data.json';

export default {
    props: ['filterType', 'lovedClocks', 'isLovedShown'],
    data() {
        return {
            clocksList: clocksData.data.reverse()
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
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Heart">
                                    <g id="Iconly/Light-Outline/Heart">
                                        <g id="Heart_2">
                                            <path id="Combined-Shape" fill-rule="evenodd" clip-rule="evenodd" d="M8.15643 2.69267C9.24043 2.00734 10.6804 1.818 11.9244 2.21667C14.6304 3.08934 15.4704 6.03934 14.7191 8.38667C13.5598 12.0733 8.60843 14.8233 8.39843 14.9387C8.32377 14.98 8.2411 15.0007 8.15843 15.0007C8.07577 15.0007 7.99377 14.9807 7.9191 14.94C7.71043 14.826 2.7951 12.1167 1.5971 8.38734L1.59643 8.38667C0.844434 6.03867 1.68177 3.088 4.3851 2.21667C5.65443 1.806 7.03777 1.98667 8.15643 2.69267ZM4.69177 3.16867C2.50443 3.874 1.9551 6.22667 2.5491 8.082C3.48377 10.99 7.17643 13.3413 8.15777 13.9233C9.14243 13.3353 12.8618 10.958 13.7664 8.08467C14.3604 6.22734 13.8091 3.87467 11.6184 3.16867C10.5571 2.828 9.3191 3.03534 8.46443 3.69667C8.28577 3.834 8.03777 3.83667 7.85777 3.70067C6.95243 3.02 5.76977 2.82067 4.69177 3.16867ZM10.9784 4.4926C11.8871 4.7866 12.5238 5.59127 12.6018 6.5426C12.6238 6.81794 12.4191 7.05927 12.1438 7.08127C12.1298 7.0826 12.1164 7.08327 12.1024 7.08327C11.8444 7.08327 11.6258 6.88527 11.6044 6.62394C11.5604 6.07594 11.1938 5.61327 10.6718 5.4446C10.4084 5.35927 10.2644 5.07727 10.3491 4.81527C10.4351 4.5526 10.7144 4.40994 10.9784 4.4926Z" fill="#fff"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
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
                    width: 46px;
                    height: 46px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 10px;
                    border-radius: 50%;
                    border: 2px solid $clr-st-dk-blue;
                    background: $clr-bg-dk-blue;
                    cursor: pointer;
                    transition: all 200ms ease-in-out;

                    svg {
                        transform: scale(1.3);
                        margin-top: -10px;
                    }

                    &.active {
                        background: #CB0049;
                        border-color: $clr-white;
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
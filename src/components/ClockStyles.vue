<script>

</script>

<template>
  
    <section class="previews-section">
        <div class="container">

            <div class="previews-section__box">
                <!-- card -->
                <div v-for="n in 9" class="card">
                    <img src="../previews/clock-1.png" class="preview" alt="Preview Image">
                    <div class="card__overlay">
                        <div class="card__overlay--info">
                            <h3>Color palette</h3>
                            <p>
                                <span>Minimal</span>
                                <span>Customizable</span>
                            </p>
                        </div>
                        <button class="card__overlay--love">
                            <img src="../assets/icon-heart.svg" alt="">
                        </button>
                        <button class="card__overlay--action">
                            <img src="../assets/icon-arrow-up.svg" alt="">
                        </button>
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

        .card {
            position: relative;
            background: red;
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
                    max-width: 80%;
                    position: absolute;
                    bottom: 30px;
                    left: 30px;

                    h3 {
                        font-weight: 700;
                    }

                    p {
                        display: flex;
                        gap: 10px;
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
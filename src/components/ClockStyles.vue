<script>

</script>

<template>
  
    <section class="previews-section">
        <div class="container">

            <div class="previews-section__box">
                <img src="../assets/img.png" alt="Preview Image">
                <img src="../assets/img.png" alt="Preview Image">
                <img src="../assets/img.png" alt="Preview Image">
                <img src="../assets/img.png" alt="Preview Image">
                <img src="../assets/img.png" alt="Preview Image">
                <img src="../assets/img.png" alt="Preview Image">
                <img src="../assets/img.png" alt="Preview Image">
                <img src="../assets/img.png" alt="Preview Image">
                <img src="../assets/img.png" alt="Preview Image">
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

        img {
            width: 100%;
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
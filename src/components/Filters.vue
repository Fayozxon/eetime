<script>
export default {
    props: ['filters', 'filterType', 'isLovedShown', 'lovedClocks'],
    data() {
        return {
            
        }
    }
}
</script>

<template>
  
  <section class="filters">
    <div class="container">

        <ul class="filters__items" :class="{disabled: isLovedShown}">
            <li
                v-for="filter in filters"
                @click="$emit('changeFilter', filter)"
                :class="{active: filterType == filter}"
                class="item"
            >{{ filter }}</li>
        </ul>
        <button v-if="lovedClocks.length" class="item" :class="{active: isLovedShown}" @click="$emit('toggleLoved')">
            <img src="../assets/icon-heart.svg">
            Loved
        </button>

    </div>
  </section>

</template>

<style lang="scss" scoped>
@import '../main.scss';

.filters {
    padding-top: 50px;
    padding-bottom: 40px;

    .container {
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 50px;
    }

    &__items {
        list-style: none;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        transition: all 200ms ease-in-out;

        &.disabled {
            opacity: 0.5;
            pointer-events: none;
        }
    }

    .item {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-radius: 7px;
        border: 2px solid $clr-st-dk-blue;
        background: $clr-bg-dk-blue;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 200ms ease-in-out;
        user-select: none;
        color: $clr-white;

        &.active {
            border-color: $clr-lt-blue;
            color: $clr-lt-blue;
        }

        img {
            margin-right: 10px;
            margin-bottom: -3px;
        }
    }
}

</style>

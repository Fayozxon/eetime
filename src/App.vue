<script>
import MsgOnMobile from './components/MsgOnMobile.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Filters from './components/Filters.vue';
import FeedbackForm from './components/FeedbackForm.vue';
import ClockStyles from './components/ClockStyles.vue';

export default {
  components: {MsgOnMobile, Header, Footer, Filters, FeedbackForm, ClockStyles},
  data() {
    return {
      lovedClocks: [],
      filters: ['all', 'minimal', 'customizable', 'lofi'],
      filterType: 'all'
    }
  },
  methods: {
    addToLoved(clockId) {
      this.lovedClocks.unshift(clockId);
    },
    changeFilter(newFilter) {
      this.filterType = newFilter;
    }
  }
}
</script>

<template>

  <MsgOnMobile></MsgOnMobile>
  
  <main class="main">

    <router-view></router-view>

    <div v-if="!$route.meta.fullPage" class="other-components">
      
      <Header></Header>
  
      <Filters :filters="filters" :filterType="filterType" @changeFilter="changeFilter"></Filters>
  
      <ClockStyles :filterType="filterType"></ClockStyles>
  
      <FeedbackForm></FeedbackForm>
  
      <Footer></Footer>
    </div>

  </main>

</template>

<style lang="scss">
@import './main.scss';

// typography
.title {
  font-size: $fs-lg;
  font-weight: 800;
  line-height: 80%;

  span {
    font-family: 'Dancing Script', serif;
  }
}

.text {
  line-height: 135%;
  color: $clr-lt-blue;
}

</style>

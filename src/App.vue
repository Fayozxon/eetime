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
      isLovedShown: false,
      filters: ['all', 'minimal', 'lofi', 'animated', 'customizable'],
      filterType: 'all',
      currentTime: ''
    }
  },
  methods: {
    addToLoved(clockId) {
      this.lovedClocks.unshift(clockId);
    },
    changeFilter(newFilter) {
      this.filterType = newFilter;
    },
    toggleLoved() {
      this.isLovedShown = !this.isLovedShown;
    },
    addRemoveLoved(clockId) {
      if (this.lovedClocks.includes(clockId)) {
        this.lovedClocks = this.lovedClocks.filter(id => id != clockId);
      } else {
        this.lovedClocks.push(clockId);
      }

      window.localStorage.setItem('lovedClocks', JSON.stringify(this.lovedClocks));
    },
    setWakeLock() {
      if ('wakeLock' in navigator) {
      let wakeLock = null;

      const requestWakeLock = async () => {
        try {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Screen wake lock is active!');
          } catch (error) {
            console.error('Failed to activate screen wake lock:', error);
          }
        };
        // Request the screen wake lock
        requestWakeLock();
      } else {
        console.log('The wakeLock API is not supported by this browser.');
      }
    }
  },
  watch: {
    lovedClocks() {
      if (!this.lovedClocks.length) {
        this.isLovedShown = false;
      }
    }
  },
  mounted() {
    this.setWakeLock();

    const temp = window.localStorage.getItem('lovedClocks');

    if (temp.length) {
      this.lovedClocks = JSON.parse(temp);
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
  
      <Filters
        :lovedClocks="lovedClocks"
        :filters="filters"
        :filterType="filterType"
        @changeFilter="changeFilter"
        :isLovedShown="isLovedShown"
        @toggleLoved="toggleLoved"
      ></Filters>
  
      <ClockStyles
        :filterType="filterType"
        :lovedClocks="lovedClocks"
        :isLovedShown="isLovedShown"
        @addRemoveLoved="addRemoveLoved"
      ></ClockStyles>
  
      <FeedbackForm></FeedbackForm>
  
      <Footer></Footer>
    </div>

  </main>

</template>

<style lang="scss">
@import './main.scss';

.main .clock {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

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

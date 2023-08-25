<script>
import MsgOnMobile from './components/MsgOnMobile.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Filters from './components/Filters.vue';
import FeedbackForm from './components/FeedbackForm.vue';
import ClockStyles from './components/ClockStyles.vue';

export default {
  components: {MsgOnMobile, Header, Footer, Filters, FeedbackForm, ClockStyles}
}
</script>

<template>
  
  <main class="main">
    
    <Header></Header>

    <Filters></Filters>

    <ClockStyles></ClockStyles>

    <FeedbackForm></FeedbackForm>

    <Footer></Footer>

    <MsgOnMobile></MsgOnMobile>

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

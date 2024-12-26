<template>
  <div id="app">
    <Header />
    <RouterView />
    <FooterSection/>
    <!-- Other content goes here -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import FooterSection from './components/FooterSection.vue';

export default {
  components: {
    Header,
    FooterSection
  }
};
</script>


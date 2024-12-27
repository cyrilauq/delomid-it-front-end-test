<script>
import AppHeader from './components/global/AppHeader.vue';
import AppContact from './views/AppContact.vue';
import AppMedias from './views/AppMedias.vue';
import AppPortfolio from './views/AppPortfolio.vue';
import AppProducts from './views/AppProducts.vue';

export default {
  name: 'App',
  components: { AppProducts, AppMedias, AppPortfolio, AppContact, AppHeader }
}
</script>

<template>
  <AppHeader />
  <AppProducts />
  <AppMedias />
  <AppPortfolio />
  <AppContact />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

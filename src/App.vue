<script>
import AppContact from './views/AppContact.vue';
import AppMedias from './views/AppMedias.vue';
import AppPortfolio from './views/AppPortfolio.vue';
import AppProducts from './views/AppProducts.vue';

export default {
  name: 'App',
  components: { AppProducts, AppMedias, AppPortfolio, AppContact },
  mounted() {
    const scrollListener = () => {
      if (hasScrolled()) {
        this.$refs.navElement.classList.add("bg-secondary");
      } else {
        this.$refs.navElement.classList.remove("bg-secondary");
      }
    }

    window.addEventListener('scroll', scrollListener);
    window.addEventListener('load', scrollListener);

    function hasScrolled() {
      return document.scrollingElement.scrollTop !== 0;
    }
  },
}
</script>

<template>
  <section
    class="header vh-100 vw-100 overflow-hidden bg-image d-flex justify-content-center flex-column align-items-center">
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" ref="navElement">
      <div class="container-fluid col-md-9 col-12">
        <button class="navbar-toggler text-light btn btn-outline-light" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <div class="container-fluid d-md-flex">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white active" aria-current="page" href="#products">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#medias">Medias</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#contact">Contact</a>
              </li>
            </ul>
            <a class="navbar-brand" href="#">Logo</a>
          </div>
          <button class="btn btn-outline-light text-capitalize">english</button>
        </div>
      </div>
    </nav>
    <h1 class="col-10 text-left text-white mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1>
    <h2 class="col-10 text-left text-white text-capitalize">Subtitle</h2>
  </section>
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

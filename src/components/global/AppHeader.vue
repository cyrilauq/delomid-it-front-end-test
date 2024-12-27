<template>
    <header
        class="header vh-100 vw-100 overflow-hidden bg-image d-flex justify-content-center flex-column align-items-center">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" ref="navElement">
            <div class="container-fluid col-md-9 col-12">
                <button class="navbar-toggler text-light btn btn-outline-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false"
                    aria-label="Toggle navigation">
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
    </header>
</template>
<script>
export default {
    name: 'AppHeader',
    mounted() {
        // Si l'utilisateur à scoller, on ajoutera une classe au menu pour qu'il soit "lisible"
        const scrollListener = () => {
            if (hasScrolled()) {
                this.$refs.navElement.classList.add("bg-secondary");
            } else {
                this.$refs.navElement.classList.remove("bg-secondary");
            }
        }

        // Ecoute des évenements et vérifie si l'utilisateur a scrollé
        window.addEventListener('scroll', scrollListener);
        window.addEventListener('load', scrollListener);

        /**
         * Vérifie si l'utilisateur a scrollé en vérifiant où se situe la partie haute de "scrollingElement"
         */
        function hasScrolled() {
            return document.scrollingElement.scrollTop !== 0;
        }
    },
}
</script>
<style lang="">

</style>
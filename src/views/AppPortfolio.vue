<template>
    <section id="portfolio" class="d-flex flex-wrap justify-content-evenly overflow-hidden">
        <div class="col-sm-5 margin-t-3rem">
            <p class="m-0 text--color-gray">All the projects</p>
            <h2 class="text-uppercase margin-b-3rem">portfolio</h2>
            <AppPortfolioList :sites="sites" />
        </div>
        <img class="position-relative margin--l-m250px"
            src="https://img.freepik.com/free-vector/laptop-realistic_78370-511.jpg?semt=ais_hybrid"
            alt="portfolio compouter image">
    </section>
</template>
<script>
import AppPortfolioList from '@/components/porfolio/AppPortfolioList.vue';

export default {
    components: { AppPortfolioList },
    data() {
        return {
            sites: [
                {
                    title: "website A",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
                },
                {
                    title: "website b",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
                },
                {
                    title: "website c",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts"
                }
            ]
        }
    }
}
</script>
<style lang="">

</style>
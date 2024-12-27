<template>

<section id="medias"
    class="vw-100 d-flex flex-column min-vh-100 justify-content-center flex-column align-items-center text-center">
    <img class="margin-t-3rem"
      src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Cartoon_Multiple_Online_Video_Streaming_Devices.svg">
    <h2 class="text-uppercase col-sm-5">medias</h2>
    <p class="text-secondary col-sm-5 margin-b-3rem">Far far away, behind the word mountains, far from the countries
      Vokalia and Consomantia, there live the blind texts. Seperated they live in Bookmarsgrove right at the coast of
      the Semantic, a large language ocean. A small river named Budeb flows</p>
    <div class="container-media d-flex flex-wrap justify-content-evenly mx-5">
        <AppMediaCard
            v-for="media in medias"
            :title="media.title"
            :iconClasses="media.iconClasses"
            :description="media.description"
            :key="media.title"
        />
    </div>
  </section>
</template>
<script>
import AppMediaCard from '@/components/cards/AppMediaCard.vue';

export default {
    name: 'AppMedias',
    components: { AppMediaCard },
    data() {
        return {
            medias: [
                {
                    iconClasses: "bi bi-power",
                    title: "best for start up",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right."
                },
                {
                    iconClasses: "bi bi-flag",
                    title: "easy to use",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right."
                },
                {
                    iconClasses: "bi bi-paragraph",
                    title: "robust in mind",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right."
                },
                {
                    iconClasses: "bi bi-paragraph",
                    title: "beautiful typography",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right."
                },
                {
                    iconClasses: "bi bi-umbrella",
                    title: "eco friendly",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right."
                },
                {
                    iconClasses: "bi bi-toggle-off",
                    title: "wide and boxed",
                    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right."
                }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>
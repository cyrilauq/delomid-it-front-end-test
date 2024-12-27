<template>
    <AppCard
        :title="title"
        :description="description"
    >
        <a href="#"><img
                :src="imgLink"
                class="card-img-top height--max-10rem" :alt="title"></a>
    </AppCard>
</template>
<script>
import AppCard from './AppCard.vue';

export default {
    name: 'AppProductCard',
    components: { AppCard },
    props: {
        imgLink: String,
        title: String,
        description: String
    }
}
</script>
<style lang="">

</style>
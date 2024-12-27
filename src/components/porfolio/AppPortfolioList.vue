<template>
    <AppPortfolioListItem v-for="site in sites" :title="site.title" :description="site.description" />
</template>
<script>
import AppPortfolioListItem from './AppPortfolioListItem.vue';

export default {
    name: 'AppPortfolioList',
    components: { AppPortfolioListItem },
    props: {
        sites: {
            type: [],
            required: true
        }
    }
}
</script>
<style lang="">

</style>
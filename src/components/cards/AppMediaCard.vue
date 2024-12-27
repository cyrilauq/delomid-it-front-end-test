<template>
    <AppCard :title="title" :description="description" class="border-0">
        <a href="#"
            class="rounded-circle text--color-dark-green icon--size-5 bg--color-light-green d-flex align-items-center justify-content-center align-self-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" :class="iconClasses"
                viewBox="0 0 16 16">
                <path
                    d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5" />
            </svg>
        </a>
    </AppCard>
</template>
<script>
import AppCard from './AppCard.vue';

export default {
    name: 'AppProductCard',
    components: { AppCard },
    props: {
        iconClasses: String,
        title: String,
        description: String
    }
}
</script>
<style lang="">

</style>
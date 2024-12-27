<template>
    <article class="d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="currentColor"
            class="bi bi-check-lg text--color-dark-green me-4" viewBox="0 0 16 16">
            <path
                d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
        </svg>
        <div class="text--color-gray">
            <a href="#" class="text-body text-decoration-none"><h3 class="text-uppercase">{{ title }}</h3></a>
            <p class="text--fs-10pt">{{ description }}</p>
        </div>
    </article>
</template>
<script>
export default {
    name: 'AppPortfolioListItem',
    props: {
        title: String,
        description: String
    }
}
</script>
<style lang="">

</style>
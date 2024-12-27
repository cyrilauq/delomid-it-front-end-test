<template>
    <div class="card card-product rounded shadow m-2 col-sm-3" v-bind="$attrs">
        <slot></slot>
        <div class="card-body">
            <a href="#">
                <h5 class="card-title fw-semibold fs-6 text-capitalize">{{ title }}</h5>
            </a>
            <p class="card-text line--clamp-2 text--fs-10pt">{{ description }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppCard',
    props: {
        title: String,
        description: String
    }
}
</script>
<style lang="">

</style>
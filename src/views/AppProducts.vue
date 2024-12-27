<template>
    <section id="products"
        class="vw-100 d-flex flex-column justify-content-center flex-column align-items-center text-center">
        <h2 class="text-capitalize margin-t-3rem">our products</h2>
        <p class="text-secondary col-sm-5 margin-b-3rem">Far far away, behing the word mountains, far from the contries
            Vokalia and Consonantia, there live the blind texts</p>
        <div class="d-flex flex-wrap justify-content-evenly mx-5">
            <AppProductCard
                v-for="product in products" 
                :title="product.title"
                :description="product.description"
                :imgLink="product.imgLink" />
        </div>
    </section>
</template>
<script>
import AppProductCard from '@/components/cards/AppProductCard.vue';

export default {
    name: "AppProducts",
    components: { AppProductCard },
    data() {
        return {
            products: [
                {
                    title: "Beautiful Sunrise",
                    description: "Far far away, behing the word mountains, far from the contries Vokalia and Consonantia, there live the blind texts.",
                    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ4nT7idmVFSKIRcWQvULQmsGQfQ-dfaxsCQ&s"
                },
                {
                    title: "cute little dog",
                    description: "Far far away, behing the word mountains, far from the contries Vokalia and Consonantia, there live the blind texts.",
                    imgLink: "https://www.rover.com/blog/wp-content/uploads/2019/11/chihuahua-in-a-cup.jpg"
                },
                {
                    title: "a wooden bridge",
                    description: "Far far away, behing the word mountains, far from the contries Vokalia and Consonantia, there live the blind texts.",
                    imgLink: "https://freerangestock.com/sample/67306/wooden-bridge-in-forest.jpg"
                },
                {
                    title: "puppy & i in the farm",
                    description: "Far far away, behing the word mountains, far from the contries Vokalia and Consonantia, there live the blind texts.",
                    imgLink: "https://i1.pickpik.com/photos/1001/217/311/country-western-ranch-farm-preview.jpg"
                },
                {
                    title: "a big wave of the blue sea",
                    description: "Far far away, behing the word mountains, far from the contries Vokalia and Consonantia, there live the blind texts.",
                    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_eA3kAhTvSy-pWm_i2Qd4J7a_QAklqQrvg&s"
                },
                {
                    title: "foggy pine trees",
                    description: "Far far away, behing the word mountains, far from the contries Vokalia and Consonantia, there live the blind texts.",
                    imgLink: "https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>
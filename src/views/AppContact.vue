<template>
    <section id="contact" class="col-sm-10 mx-auto text-center d-flex align-items-center justify-content-center flex-column min-vh-100">
        <h2 class="text-uppercase margin-b-3rem">contact</h2>
        <figure>
            <blockquote class="blockquote col-sm-6 mx-auto">
            <p class="text--color-gray text--between-quotes">I think design would be better if designers were much more
                skeptical about its applications. If you believe in the potency of your craft, where you choose to dole
                it out
                is nout something to take lightly.</p>
            </blockquote>
            <figcaption class="blockquote-footer col-sm-6 mx-auto text-capitalize margin-b-3rem">
                frank chimero
            </figcaption>
        </figure>

        <form class="d-flex justify-content-center flex-column flex-sm-row" id="newsletter-form" @submit="onNewsLetterFormSubmitted">
            <label for="email" class="form-label col-sm-4 text-start fs-5">Subscribe to our newsletter</label>
            <div class="d-flex bg-body-secondary col-sm-4">
                <span class="input-group-text border border-0 bg-transparent" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-send" viewBox="0 0 16 16">
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                    </svg>
                </span>
                <input id="email" name="email" type="email" class="form-control border border-0 bg-transparent"
                    placeholder="Enter your email" v-model="email">
                <span id="email_error" class="text-danger w-100 margin--s-n27rem position-absolute margin--ts-2rem"
                    v-if="emailHasError">The provided email is not a valid email</span>
            </div>
            <button class="text-capitalize btn btn-success">send</button>
        </form>
    </section>
</template>
<script>
export default {
    name: "AppContact",
    data() {
        return {
            email: "",
            emailRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            emailHasError: false
        }
    },
    methods: {
        onNewsLetterFormSubmitted(event) {
            event.stopPropagation()
            event.preventDefault()
            if (!this.emailRegex.test(this.email)) {
                this.emailHasError = true
            } else {
                this.emailHasError = false
            }
        }
    }
}
</script>
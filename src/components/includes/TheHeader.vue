<template>
    <div>
        <b-navbar type="dark" variant="info" fixed>
            <b-navbar-brand>
                <router-link class="text-white" to="/">Home</router-link>
            </b-navbar-brand>

            <b-navbar-nav class="ml-auto">
                <b-nav-item right>
                    <b-button variant="outline-info" class="text-white" size="lg">
                        <div @click="show">
                            <i class="material-icons mr-2 mt-1">shopping_cart</i>
                            <div class="float-right">{{ total }}</div>
                        </div>
                    </b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>

        <modal name="checkoutModal" width="90%" height="auto" :scrollable="true">
            <ModalCheckout/>
        </modal>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex'
    import ModalCheckout from '../ModalCheckout'

    export default {
        name: 'TheHeader',
        components: { ModalCheckout },
        methods: {
            show () {
                this.$modal.show('checkoutModal');
                // this.$modal.show(ModalProduct, {product: item})
                // console.log("yo: ", item.name)
            }
        },
        computed: mapState({
            total: state => {
                let total = 0
                for (let i = 0; i < state.cart.items.length; i++) {
                    total += state.cart.items[i].quantity
                }
                return total
            },
            // products: state=> state.cart.items
        }),
    }
</script>

<style scoped>

a:hover {
    text-decoration: none;
}

.containerInfo {
    position: relative;
}

.content {
    position: absolute;
    /* display: inline-block; */
    bottom: 0;
}

</style>

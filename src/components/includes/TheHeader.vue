<template>
    <div>
        <b-navbar variant="light" fixed style="box-shadow: 0px 2px 20px #ffffff">
            <b-navbar-brand>
                <router-link class="text-dark" to="/">HOME</router-link>
            </b-navbar-brand>

            <b-navbar-nav class="ml-auto">
                <b-nav-item right>
                    <b-button variant="outline-ligt" class="text-white" size="lg">
                        <div @click="show">
                            <i class="material-icons mr-2 mt-1 text-dark">shopping_cart</i>
                            <div class="float-right text-dark">{{ total }}</div>
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

    import { mapState } from 'vuex'
    import ModalCheckout from '../ModalCheckout'

    export default {
        name: 'TheHeader',
        components: { ModalCheckout },
        methods: {
            show () {
                this.$modal.show('checkoutModal');
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
        bottom: 0;
    }

</style>

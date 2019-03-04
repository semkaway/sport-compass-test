<template>
    <div class="modalHolder m-1 p-3">
        <h1 class="mb-2">Your cart</h1>
        <div v-if="products.length == 0">
            <h3>{{ message }}</h3>
        </div>
        <div v-else>
            <div class="dataHolder mt-1" v-for="product in products" :key="product.id">
                <div class="detailsHolder mt-2">
                    <img :src="product.product.image || require('@/assets/img/defaultImage.jpg')"/>
                    <span class="text-uppercase ml-2">{{ product.product.name }}</span>
                    {{ product.product.size }}
                </div>
                <div class="actionButtons mt-2">
                    <div class="inline-block mt-2">
                        <b-button variant="light" class="inline-block" @click="changeNumberOfItems(product.product, '-')">-</b-button>
                        <div class="mx-1 inline-block">{{ product.quantity }}</div>
                        <b-button variant="light" class="inline-block" @click="changeNumberOfItems(product.product, '+')">+</b-button>
                    </div>
                    <div class="inline-block ml-2">$ {{ parseInt(product.product.price.slice(1)) * product.quantity }}</div>
                    <b-button class="float-right inline-block" variant="outline-danger" @click="deleteItem(product)">X</b-button>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div id="totalPrice" class="float-right"><strong>Total: ${{ totalPrice() }}</strong></div>
            <div class="clearfix"></div>
            <b-button variant="outline-info" class="mt-3 w-100" @click="goToCheckout">CHECKOUT</b-button>
        </div>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'ModalCheckout',
        data () {
            return {
                message: "You don't have anything in your cart yet. Go buy some cool stuff!"
            }
        },
        methods: {
            totalPrice() {
                let newTotal = 0
                for(var i = 0; i < this.products.length; i++) {
                    newTotal += parseInt(this.products[i].product.price.substr(1)) * this.products[i].quantity
                }
                return newTotal
            },
            changeNumberOfItems(product, symbol) {
                let newQuantity
                for(var i = 0; i < this.products.length; i++) {
                    if ( this.products[i].product.id === product.id && this.products[i].product.size === product.size) {
                        newQuantity = this.products[i].quantity
                    }
                }
                if (symbol == "-") {
                    if (newQuantity > 1) {
                        newQuantity--
                    }
                }
                else if (symbol == "+") {
                    if (newQuantity < product.inventory) {
                        newQuantity++
                    }
                }
                let newProduct = {
                    'id': product.id,
                    'name': product.name,
                    'description': product.description,
                    'inventory': product.inventory,
                    'quantity': newQuantity,
                    'image': product.image[0],
                    'size': product.size,
                    'price': product.price
                }
                this.changeQuantityAtCheckout(newProduct)
            },
            goToCheckout() {
                this.message = "Thank you for shopping with us. We will contact you soon."
                this.checkout()
            },
            ...mapActions('cart', [
                'changeQuantityAtCheckout',
                'deleteItem',
                'checkout'
              ])
        },
        computed: mapState({
            products: state=> state.cart.items
        })
    }

</script>

<style scoped>

    .dataHolder {
        width: 100%;
        height: 10em;
    }

    .detailsHolder, .actionButtons {
        float: left;
        width: 50%;
    }

    .actionButtons, .inline-block {
        display: inline-block;
    }

    img {
        width: 20%;
    }

    @media only screen and (max-width: 576px) {

        .dataHolder {
            height: auto;
        }

        .detailsHolder {
            width: 100%;
        }

        .actionButtons {
            flot: none;
            width: 100%;
            margin: 0 auto;
        }

        img {
            width: 40%;
        }
    }

</style>

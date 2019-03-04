<template>
    <div>
        <div class="text-white" style="width: 100%; height: 25em; position: relative;">
            <img style="position: absolute; z-index: -1;" src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260">
            <div class="centered">
                <h1>SHOP TITLE</h1>
                <div>This should be the description of the shop. Here you tell how cool you are and why people should buy stuff from you. Be persuasive!
            This should be the description of the shop. Here you tell how cool you are and why people should buy stuff from you. Be persuasive!</div>
        </div>
        </img>
        </div>
        <b-container class="container my-4" fluid>
            <b-row class="mt-4">
                <b-col v-for="product in products" :key="product.id" lg="3" xs="12" md="4" class="p-2">
                    <Product :product="product"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Product from './Product'
    import products from './data/products'

    export default {
        name: 'MainPage',
        components: { Product },
        data() {
            return {
                products: products
            }
        }
    }
</script>

<style scoped>

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>

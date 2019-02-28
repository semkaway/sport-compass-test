<template>
    <b-container class="bv-example-row container">
        <b-row>
            <b-col v-for="product in products" :key="product.id">
                <Product :product="product"/>
            </b-col>
        </b-row>
    </b-container>
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

</style>

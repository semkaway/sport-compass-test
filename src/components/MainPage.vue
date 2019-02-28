<template>
    <b-container class="container" fluid>
        <b-row>
            <b-col v-for="product in products" :key="product.id" lg="3" xs="12" md="4" class="p-2">
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

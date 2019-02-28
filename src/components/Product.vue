<template>
    <div @click="show(product)" id="product" class="m-1 p-1">
        <img :src="product.image">
        <div >{{ product.name }}</div>
        <div>
            <span class="productName">{{ product.price }}</span>
            <b-button variant="outline-info" class="float-right">Add to cart</b-button>
        </div>
    </div>
</template>

<script>

    import ModalProduct from './ModalProduct'

    export default {
        name: 'Product',
        props: ['product'],
        components: { ModalProduct },
        methods: {
            show (item) {
                this.$modal.show(ModalProduct, {product: item});
            }
        }
    }
</script>

<style scoped>

    img {
        width: 100%;
    }

    #product {
        background-color: white;
    }

    #product:hover {
        cursor: pointer;
    }

    .productName {
        font-weight: bold;
        font-size: 1.6em;
        text-align: center;
    }

    .addToCart {
        width: 100%;
    }

</style>

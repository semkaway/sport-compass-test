<template>
    <div @click="show(product)" id="product" class="m-1 p-1">
        <img :src="product.image">
        <div>Name: {{ product.name }}</div>
        <div>Size: {{ product.size }}</div>
        <div>Price: {{ product.price }}</div>
        <div>Color: {{ product.color }}</div>
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
        border: solid black 2px;
    }

    #product:hover {
        cursor: pointer;
    }

</style>

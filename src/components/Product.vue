<template>
    <div @click="show(product)" class="product m-1 p-1">
        <div class="imageHolder">
            <img :src="product.image[0] || require('@/assets/img/defaultImage.jpg')" />
        </div>
        <div class="mt-2">
            <div >{{ product.name }}</div>
            <div>
                <span class="productPrice">{{ product.price }}</span>
                <b-button variant="outline-info" class="float-right">Add to cart</b-button>
            </div>
        </div>

        <modal :name="product.name" :scrollable="true" height="auto">
            <ModalProduct :product="product"/>
        </modal>
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
                this.$modal.show(item.name);
                // this.$modal.show(ModalProduct, {product: item})
                console.log("yo: ", item.name)
            }
        }
    }
</script>

<style scoped>

    .imageHolder {
        height: 80%;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    .product {
        background-color: white;
        position: relative;
        height: 25em;
    }

    .product:hover {
        cursor: pointer;
    }

</style>

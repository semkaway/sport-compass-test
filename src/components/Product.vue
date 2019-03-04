<template>
    <div class="product m-1 p-1">
        <div class="imageHolder">
            <img :src="product.image[0] || require('@/assets/img/defaultImage.jpg')"  @click="show(product)"/>
        </div>
        <div class="mt-2">
            <div class="text-uppercase">{{ product.name }}</div>
            <div class="containerInfo">
                <div class="mr-1 text-muted content">
                    Sizes: <div v-for="size in product.size" :key="size.id" class="mr-1 sizeList">{{ size }}</div>
                </div>
                <div class="productPrice float-right">{{ product.price }}</div>
                <div class="clearfix"></div>
            </div>
        </div>

        <modal :name="product.name" width="70%" height="auto" :scrollable="true">
            <ModalProduct :product="product"/>
        </modal>
    </div>
</template>


<script>

    import ModalProduct from './ModalProduct'
    import { mapActions } from 'vuex'

    export default {
        name: 'Product',
        props: ['product'],
        components: { ModalProduct },
        methods: {
            show (item) {
                this.$modal.show(item.name)
            },
            ...mapActions('cart', [
                'addProductToCart'
              ])
        }
    }
</script>

<style scoped>

    .product {
        background-color: white;
        position: relative;
        height: 25em;
    }

    .imageHolder {
        height: 80%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    img:hover {
        cursor: pointer;
    }

    .containerInfo {
        position: relative;
    }

    .content {
        position: absolute;
        bottom: 0;
    }

    .sizeList {
        display: inline-block;
    }

    .myModal {
        border: red solid 1px;
    }

    @media only screen and (max-width: 576px) {

        .test .v--modal-box {
            width: 100%;
        }

    }

</style>

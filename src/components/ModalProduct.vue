<template>
    <div class="modalHolder m-1 p-1">
        <span class="productName mb-3">{{ product.name }}</span>
        <div class="imageHolder p-1">
            <div class="mainImage">
                <img id="currentPicture" :src="product.image[0] || require('@/assets/img/defaultImage.jpg')">
            </div>
            <div class="thumbnails">
                <img @click="nextImage(image)" class="mr-2" v-for="image in product.image" :key="product.id" :src="image" />
            </div>
        </div>
        <div class="productDetails p-1">
            <div class="mb-1">{{ product.description }}</div>
            <div class="mt-5">
                <b-dropdown slot="append" text="Size" variant="outline-info">
                    <b-dropdown-item v-for="size in product.size">{{ size }}</b-dropdown-item>
                </b-dropdown>
                <b-dropdown slot="append" text="Quantity" variant="outline-info">
                    <b-dropdown-item v-for="i in 5" :key="i">{{ i }}</b-dropdown-item>
                </b-dropdown>
                <div class="float-right productPrice">{{ product.price }}</div>
                <div class="clearfix"></div>
            </div>
            <b-button variant="outline-info" class="addToCartButton my-3">Add</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalProduct',
        props: ['product'],
        methods: {
            nextImage(newImg) {
                let currentImg = document.getElementById('currentPicture')
                currentImg.src = newImg
            }
        }
    }
</script>

<style scoped>

    .modalHolder {
        height: 25em;
    }

    .imageHolder {
        height: 100%;
        width: 50%;
        float: left;
    }

    .mainImage {
        max-width: 100%;
        height: 75%;
        margin-bottom: 1em;
    }

    .mainImage img {
        max-width: 100%;
        max-height: 100%;
        margin: 0 auto;
    }

    .thumbnails {
        height: 20%;
    }

    .thumbnails img {
        max-height: 100%;
    }

    .productName {
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
    }

    .productDetails {
        width: 50%;
        float: left;
    }

    .addToCartButton {
        width: 100%;
    }

    @media only screen and (max-width: 576px) {
        .imageHolder {
            float: none;
            /* margin-right: 0; */
            width: 100%;
            border: 0;
            margin: 0 auto;
        }

        .productDetails {
            width: 60%;
        }

    }

</style>

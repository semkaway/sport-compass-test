<template>
    <div class="modalHolder m-1 p-1">
        <span class="productName mb-3">{{ product.name }}</span>
        <div class="imageHolder p-1">
            <div class="mainImage">
                <img id="currentPicture" :src="product.image[0] || require('@/assets/img/defaultImage.jpg')">
            </div>
            <div class="thumbnails">
                <img @click="nextImage(image)" class="mr-2" v-for="image in product.image" :key="image.id" :src="image" />
            </div>
        </div>
        <div class="productDetails p-1">
            <div class="mb-1">{{ product.description }}</div>
            <div class="mt-5">
                <b-dropdown slot="append" text="Size" variant="outline-info">
                    <b-dropdown-item v-for="size in product.size" :key="size.id" @click="chooseSize(size)">{{ size }}</b-dropdown-item>
                </b-dropdown>
                <b-dropdown slot="append" text="Quantity" variant="outline-info">
                    <b-dropdown-item v-for="i in 5" :key="i" @click="updatePrice(i)">{{ i }}</b-dropdown-item>
                </b-dropdown>
                <div id="price" class="float-right productPrice">{{ product.price }}</div>
                <div class="clearfix"></div>
            </div>
            <b-button variant="outline-info" class="addToCartButton my-3" @click="addItemToCart(product)">Add</b-button>
        </div>
    </div>
</template>

<script>

    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'ModalProduct',
        props: ['product'],
        data() {
            return {
                size: String,
                quantity: 1,
                price: 0
            }
        },
        methods: {
            nextImage(newImg) {
                let currentImg = document.getElementById('currentPicture')
                currentImg.src = newImg
            },
            updatePrice(value) {
                let currentPrice = document.getElementById('price')
                let newPrice = parseInt(this.product.price.substr(1)) * value
                currentPrice.textContent = "$" + newPrice
                this.price = newPrice
                this.quantity = value
            },
            chooseSize(size) {
                    console.log("Size: ", size)
                    this.size = size
            },
            addItemToCart() {
                let newProduct = {
                    'id': this.product.id,
                    'name': this.product.name,
                    'description': this.product.description,
                    'inventory': this.product.inventory,
                    'quantity': this.quantity,
                    'image': this.product.image[0],
                    'size': this.size,
                    'price': this.product.price
                }
                // newProduct.size = this.size
                // newProduct.quantity = this.quantity
                console.log("THIS PRODUCT: ", this.product)
                console.log("NEW PRODUCT: ", newProduct)
                this.addProductToCart(newProduct)
            },
            ...mapActions('cart', [
                'addProductToCart'
              ])
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

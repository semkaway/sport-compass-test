<template>
    <div class="modalHolder m-1 p-5">
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
            <div v-if="product.inventory < 3" class="text-danger mt-1">Only {{ product.inventory }} left in stock!</div>
            <div class="mt-5">
                <b-button   variant="outline-info"
                            :pressed="oneSize === size"
                            class="mr-1"
                            v-for="oneSize in product.size"
                            :key="oneSize.id"
                            @click="chooseSize(oneSize)">{{ oneSize }}
                </b-button>
                <div class="ml-5 mt-3 mr-1 inline-block">
                    <b-button variant="light" class="inline-block" @click="removeItem">-</b-button>
                    <div class="mx-3 inline-block">{{ quantity }}</div>
                    <b-button variant="light" class="inline-block" @click="addItem">+</b-button>
                </div>
                <div id="price" class="float-right productPrice">{{ product.price }}</div>
                <div class="clearfix"></div>
            </div>
            <b-button variant="outline-info" class="addToCartButton my-3" @click="addItemToCart(product)">Add</b-button>
            <b-button variant="outline-danger" class="closeButton mb-1" @click="$modal.hide(product.name)">Close</b-button>
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
                size: this.product.size[0],
                quantity: 1,
                price: 0,
                pressed: false
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
            },
            chooseSize(size) {
                    // let chosenSize = document.getElementById('size')
                    // chosenSize.text($(this).text()) = size
                    // chosenSize.val($(this).text());
                    console.log("chosenSize: ", this)
                    // self.pressed = true
                    this.size = size
            },
            addItem() {
                if (this.quantity < this.product.inventory)
                    this.quantity++
                this.updatePrice(this.quantity)
            },
            removeItem() {
                if (this.quantity > 1)
                    this.quantity--
                this.updatePrice(this.quantity)
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
        height: 32em;
        width: auto;
    }

    .imageHolder {
        height: 100%;
        width: 50%;
        float: left;
    }

    .mainImage {
        max-width: 100%;
        height: 80%;
        margin-bottom: 1em;
    }

    .mainImage img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .thumbnails {
        height: 15%;
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

    .closeButton {
        display: none;
    }

    .inline-block {
        display: inline-block;
    }

    @media only screen and (max-width: 576px) {

        .modalHolder {
            padding: 0 !important;
        }


        .imageHolder {
            float: none;
            /* display: block; */
            width: auto;
            border: 0;
            margin: 0 auto;
        }

        /* .productDetails {
            display: block;
        } */

        .thumbnails {
            width: auto;
        }

        .thumbnails img {
            max-width: 30%;
        }

        .productDetails {
            width: auto;
        }

        .closeButton {
            display: block;
            width: 100%;
        }
    }

</style>

<template>
    <div>
        <div class="text-white imgHolder">
            <img src="https://www.zastavki.com/pictures/640x480/2014/Drawn_wallpapers___Paintings_Painting_Claude_Monet_-_Water_Lilies_069250_29.jpg"/>
        </div>
        <b-container class="container my-4" fluid>
            <b-row>
                <h1 class="mx-auto">SHOP TITLE</h1>
            </b-row>
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

    .imgHolder {
         width: 100%;
         height: 25em;
         position: relative;
    }

    img {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: -1;
        object-fit: cover;
    }

    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

</style>

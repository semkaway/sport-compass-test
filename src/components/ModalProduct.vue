<template>
    <div id="modal" class="m-1 p-1">
            <img :src="product.image">
            <div>Name: {{ product.name }}</div>
            <div>Size: {{ product.size }}</div>
            <div>Price: {{ product.price }}</div>
            <div>Color: {{ product.color }}</div>
    </div>
</template>

<script>
    export default {
        name: 'ModalProduct',
        props: ['product']
    }
</script>

<style scoped>

    img {
        width: 70px;
    }

    #modal {
        border: solid red 1px;
    }

</style>

<template>
    <div>
        <div>Name: {{ product.name }}</div>
        <div>Size: {{ product.size }}</div>
        <div>Price: {{ product.price }}</div>
        <div>Color: {{ product.color }}</div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        props: ['product']
    }
</script>

<style scoped>

</style>

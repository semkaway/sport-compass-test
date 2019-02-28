<template>
    <div>
        <app-header/>
        <router-view/>
        <app-footer/>
    </div>
</template>

<script>
    import TheHeader from './components/includes/TheHeader'
    import TheFooter from './components/includes/TheFooter'

    export default {
        name: 'app',
        components: {
            'app-header': TheHeader,
            'app-footer': TheFooter
        }
    }
</script>

<style>
    html, body, #app {
        min-height: 100%;
    }

    body {
        position: relative;
        min-height: 100%;
        box-sizing: border-box;
    }

    .container {
        height: 100%;
    }
</style>

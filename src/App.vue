<template>
    <div id="app">
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

    .container {
        min-height: calc(100vh - 40px);
    }

    a {
        text-decoration: none;
    }

    .productPrice {
        font-weight: bold;
        font-size: 1.6em;
        text-align: center;
    }

</style>

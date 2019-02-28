<template>
  <div>
      <app-header/>
      <MainPage/>
      <app-footer/>
  </div>
</template>

<script>
import MainPage from './components/MainPage'
import TheHeader from './components/includes/TheHeader'
import TheFooter from './components/includes/TheFooter'

export default {
  name: 'app',
  components: {
    MainPage,
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

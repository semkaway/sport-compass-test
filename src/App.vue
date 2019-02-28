<template>
  <div id="app">
      <app-header/>
      <MainPage/>
      <app-footer/>
  </div>
</template>

<script>
import MainPage from './components/MainPage'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

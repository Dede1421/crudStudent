<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <AppLayout>
     <router-view/>
  </AppLayout>
 
</template>

<script>
import "@/styles/styles.css"
import AppLayout from './components/AppLayout.vue'

export default {
  name: 'App',
  components: {
    AppLayout,
  }
}
</script>

<style>


</style>

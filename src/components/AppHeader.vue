<template>
  <header class="header">
    <router-link to="/">
      School
    </router-link>    
    <AppNav />
  </header>

</template>

<script>
import AppNav from './AppNav.vue';
export default {
  components: { AppNav }
}

</script>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #226697;
  padding: 0px 24px;
  min-height: 64px;
}

a {
  text-decoration: none;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;

}
</style>
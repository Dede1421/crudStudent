<template>
  <div class="layout">
    <AppHeader />
    <AppMain>
      <slot></slot>
    </AppMain>
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";

export default {
 components: { AppHeader, AppMain }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .layout {
  height: 100vh;
} */
</style>

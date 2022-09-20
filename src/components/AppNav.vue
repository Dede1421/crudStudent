<template>
  <nav>
    <ul class="nav">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/list">List</router-link>
      </li>
      <li>
        <router-link to="/Create">Create</router-link>
      </li>
      <li>
        <router-link to="/edit">Edit</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  }


</script>

<style scoped>

a {
  text-decoration: none;
  color: #fff;
}

.nav {
  display: flex;
}

.nav li {
  color: #fff;
  margin-left: 10px;
}

</style>




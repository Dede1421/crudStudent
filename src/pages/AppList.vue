<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Students
      </div>
      <!-- <div v-for="user in users" :key="user.id">
        <div>{{user.id}}</div>
        <div>{{user.name}}</div>
      </div> -->
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>              
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{user.id}}</td>
              <td>{{user.fullName}}</td>
              <td>{{user.userName}}</td>
              <td>{{user.email}}</td>
              <td>
                <a name="" id="" class="btn btn-primary" href="#" role="button">Edit</a>
                <a name="" id="" class="btn btn-primary" href="#" role="button">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      users: []
    }
  },

  created() {
    axios.get("http://localhost:8080/person")
      .then(response => response.data)
      .then(data => this.users = data)
  },

  // methods :{

  // }
}
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>


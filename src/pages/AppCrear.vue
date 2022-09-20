<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Create - Students
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addRegister">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" v-model="student.name" id="name"
              aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Put student's name</small>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" name="email" v-model="student.email" id="email"
              aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Put student's email</small>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="submit" class="btn btn-primary">Add</button>
            <button type="button" class="btn btn-warning">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "../router/routes";
import axios from "axios"

export default {
  data() {
    return {
      student: {}
    }
  },

  methods: {
    addRegister() {
      console.log(this.student);

      const sendData = { fullName: this.student.name, email: this.student.email, userName: "asdasd" }
      axios.post("http://localhost:8080/person", sendData)
        .then((response) => response.data)
        .then((responseData => {
          console.log(responseData);
          router.push("/list")
        }))
    }
  }
}

</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
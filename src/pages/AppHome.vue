<template>
  <div style="padding: 20px;">
    <table>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
      <tr>
        <td>01</td>
        <td>Luka</td>
        <td>Gerhard</td>
        <td>12</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>02</td>
        <td>Bastian</td>
        <td>Spovich</td>
        <td>12</td>
        <td>Poland</td>
      </tr>
      <tr>
        <td>03</td>
        <td>Phillip</td>
        <td>Brozovich</td>
        <td>12</td>
        <td>Croatia</td>
      </tr>
      <tr>
        <td>04</td>
        <td>Andreas</td>
        <td>Pusk</td>
        <td>12</td>
        <td>USA</td>
      </tr>
    </table>
  </div>
</template>

<script>

</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 70%;
}

tr th {
  font-weight: 700;
}

tr:nth-child(even) {
  background-color: #ddd;
}

td,
th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>
<script setup lang="ts">
</script>

<template>
  <div class="container">
    <div class="left-section">
      <h2>User Management</h2>
      <p>This application allows you to manage users.</p>
      <router-link to="/users" class="button">Go to Users</router-link>
    </div>
    <div class="right-section">
      <h2>Permission Management</h2>
      <p>This application allows you to manage permissions for users.</p>
      <router-link to="/permissions" class="button">Go to Permissions</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.left-section,
.right-section {
  flex-basis: 45%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.left-section h2,
.right-section h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.left-section p,
.right-section p {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>
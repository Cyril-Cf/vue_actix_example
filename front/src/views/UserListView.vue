<template>
  <div class="users-container">
    <h1>Users</h1>
    <UserListComponent />
    <div class="add-user-link">
      <RouterLink to="/user-new" class="button">Add User</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserListComponent from "@/components/UserListComponent.vue"
</script>

<style scoped>
.users-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.add-user-link {
  margin-top: 20px;
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

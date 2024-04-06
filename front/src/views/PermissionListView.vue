<template>
  <div class="permissions-container">
    <h1>Permissions</h1>
    <PermissionListComponent />
    <div class="add-permission-link">
      <RouterLink to="/permission-new" class="button">Add Permission</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import PermissionListComponent from "@/components/PermissionListComponent.vue"
</script>

<style scoped>
.permissions-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.add-permission-link {
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

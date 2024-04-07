<template>
  <div class="permissions-list">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="permission in permissionStore.permissions" :key="permission.id">
          <td>{{ permission.name }}</td>
          <td>
            <button @click="confirmDelete(permission)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Permission } from '@/models/permission';
import { usePermissionStore } from '@/stores/permissionStore';

const permissionStore = usePermissionStore();

async function confirmDelete(permission: Permission) {
  if (confirm("Are you sure you want to delete this permission?")) {
    await handleClick(permission);
  }
}

async function handleClick(permission: Permission) {
  try {
    await permissionStore.deletePermission(permission.id);
  } catch (error) {
    alert("Something went wrong. Are you sure this permission isn't linked to any user? Remove all associations first.");
  }
}
</script>

<style scoped>
.permissions-list {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th,
tbody td {
  border: 1px solid #ccc;
  padding: 8px;
}

thead th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
}

button {
  padding: 6px 12px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #c82333;
}
</style>

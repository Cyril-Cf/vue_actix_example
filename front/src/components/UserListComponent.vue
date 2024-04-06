<template>
  <div class="users-list">
    <h2>Users List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userStore.users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>
            <RouterLink :to="`/user/${user.id}`" class="button">See/Modify</RouterLink>
            <button @click="confirmDelete(user)" class="button delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { User } from '@/models/user';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

async function confirmDelete(user: User) {
  if (confirm("Are you sure you want to delete this user?")) {
    await handleClick(user);
  }
}

async function handleClick(user: User) {
  await userStore.deleteUser(user.id);
}
</script>

<style scoped>
.users-list {
  max-width: 800px;
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

.button {
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 5px;
}

.delete-button {
  background-color: #dc3545;
}

.button:hover {
  background-color: #0056b3;
}
</style>

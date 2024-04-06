<template>
  <div class="add-permission-container">
    <h1>Add Permission</h1>
    <form @submit.prevent="onSubmit"> 
      <label for="permission-name">Permission Name:</label>
      <input id="permission-name" type="text" v-model="name" required>
      <button type="submit" class="button">Add Permission</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { usePermissionStore } from '@/stores/permissionStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const permissionStore = usePermissionStore()
const name = ref('')

async function onSubmit() {
  await permissionStore.addPermission(name.value)
  router.push({ path: '/permissions' })
}
</script>

<style scoped>
.add-permission-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>

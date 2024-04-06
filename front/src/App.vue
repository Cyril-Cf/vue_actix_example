<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { usePermissionStore } from '@/stores/permissionStore'
import { onMounted } from 'vue'
onMounted(async() => {
  const userStore = useUserStore();
  const permissionStore = usePermissionStore();
  await userStore.fetchUsers();
  await permissionStore.fetchPermissions();
})
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/permissions">Permissions</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: #333;
  padding: 20px;
}

nav {
  display: flex;
  justify-content: space-between;
  margin: 0 150px;
}

nav a, nav a:visited {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #555;
}
</style>
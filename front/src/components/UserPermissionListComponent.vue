<template>
  <div class="associated-permissions">
    <h1>Associated Permissions</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="permission in permissionStore.permissions" :key="permission.id">
          <td>
            <div class="permission-name">
              <span>{{ permission.name }} </span>
              <span v-if="doesUserPossessPermission(permission)" class="green-check">&#9989;
              </span>
            </div>
          </td>
          <td>
            <button @click="onChange(permission)">
              {{ showButtonText(permission) }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { defineProps, ref, onBeforeMount } from 'vue'
import { usePermissionStore } from '@/stores/permissionStore'
import { Permission } from '@/models/permission';

const permissionStore = usePermissionStore();
const userStore = useUserStore();
const props = defineProps({
  user: {
    required: true
  }
});
const permissions = ref([]);

onBeforeMount(async () => {
  const res = await userStore.getPermissionForUser(props.user.id);
  permissions.value = res;
});

function doesUserPossessPermission(permission: Permission): boolean {
  return permissions.value.some((p) => p.id === permission.id);
}

async function onChange(permission: Permission) {
  await userStore.togglePermissionForUser(permission.id, props.user.id, doesUserPossessPermission(permission));
  permissions.value = await userStore.getPermissionForUser(props.user.id);
}

function showButtonText(permission: Permission): string {
  return doesUserPossessPermission(permission) ? "Remove" : "Add";
}
</script>

<style scoped>
.associated-permissions {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
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

td {
  width: 50%;
  height: 100%;
}

.permission-name {
  display: flex;
  align-items: center;
}

.green-check {
  height: 60%;
  border: none;
}

button {
  width: 20%;
  padding: 6px 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>

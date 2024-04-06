import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Permission } from '@/models/permission'
import axios from 'axios'

export const usePermissionStore = defineStore('permission', () => {
  const URL_FRAGMENT = "permissions"
  const permissions = ref<Permission[]>([])

  async function fetchPermissions() {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}${URL_FRAGMENT}`);
    permissions.value = res.data
  }
  async function addPermission(new_name: string) {
    await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}${URL_FRAGMENT}/${new_name}`);
    await fetchPermissions();
  }
  async function deletePermission(id: number) {
    await axios.delete(`${import.meta.env.VITE_BACKEND_BASE_URL}${URL_FRAGMENT}/${id}`);
    await fetchPermissions();
  }
  return { permissions, fetchPermissions, addPermission, deletePermission }
})

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { User } from '@/models/user'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const URL_FRAGMENT = "users"
  const users = ref<User[]>([])

  async function fetchUsers() {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}${URL_FRAGMENT}`);
    users.value = res.data
  }
  async function addUser(new_name: string) {
    await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}${URL_FRAGMENT}/${new_name}`);
    await fetchUsers();
  }
  async function fetchOneUser(id: number): User {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}${URL_FRAGMENT}/${id}`);
    return res.data
  }
  async function modifyUser(id: number, new_name: string) {
    await axios.put(`${import.meta.env.VITE_BACKEND_BASE_URL}${URL_FRAGMENT}/${id}`, { name: new_name });
    await fetchUsers();
  }
  async function getPermissionForUser(id: number) {
    const res = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}user_permissions/${id}`);
    return res.data
  }
  async function togglePermissionForUser(permission_id: number, user_id: number, delete_permission: Boolean) {
    if (delete_permission) {
      await axios.delete(`${import.meta.env.VITE_BACKEND_BASE_URL}user_permissions/${permission_id}/${user_id}`);
    } else {
      await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}user_permissions/${permission_id}/${user_id}`);
    }
  }
  async function deleteUser(user_id: number) {
    const res = await axios.delete(`${import.meta.env.VITE_BACKEND_BASE_URL}${URL_FRAGMENT}/${user_id}`);
    await fetchUsers();
  }
  return { users, fetchUsers, addUser, fetchOneUser, modifyUser, getPermissionForUser, togglePermissionForUser, deleteUser }
})

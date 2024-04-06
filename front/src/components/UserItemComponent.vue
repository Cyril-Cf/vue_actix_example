<template>
  <div class="user-form">
    <h2>{{ create ? 'Add New User' : 'Modify User' }}</h2>
    <form @submit.prevent="onSubmit"> 
      <label for="user-name">Name:</label>
      <input id="user-name" type="text" v-model="name" required>
      <button type="submit" class="button">{{ create ? 'Add New User' : 'Modify User' }}</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { defineProps } from 'vue'

const props = defineProps({
  create: {
    type: Boolean,
    required: true,
    default: true
  },
  user: {
    required: false
  }
})

const router = useRouter()
const userStore = useUserStore()
const name = ref('')
let user = null

onBeforeMount(async () => {
  const route = useRoute()
  const id = route.params.id
  user = props.create ? null : await userStore.fetchOneUser(id)
  if (!props.create && user) {
    name.value = user.name
  }
})

async function onSubmit() {
  if (props.create) {
    await userStore.addUser(name.value)
  } else {
    if (user) {
      await userStore.modifyUser(user.id, name.value)
    }
  }
  router.push({ path: '/users' })
}
</script>

<style scoped>
.user-form {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  font-size: 1.5rem;
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

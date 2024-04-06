<script setup lang="ts">
import UserItemComponent from "@/components/UserItemComponent.vue"
import UserPermissionListComponent from "@/components/UserPermissionListComponent.vue"
import { useUserStore } from '@/stores/userStore'
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

let user = ref(null)
onBeforeMount(async() => {
  const route = useRoute();
  const id = route.params.id;
  const userStore = useUserStore();
  user.value = await userStore.fetchOneUser(id);
})
</script>

<template>
  <UserItemComponent :create="false" />
  <UserPermissionListComponent v-if="user" :user="user" />
</template>

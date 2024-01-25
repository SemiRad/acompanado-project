<script setup lang="ts">
  import { useCounterStore } from '@/stores/counter';
  import { useUserStore } from '@/stores/useUserStore';
  import { useTitle } from '@vueuse/core'
  import { storeToRefs } from 'pinia';
  useTitle('Home');

  const counterStore = useCounterStore();
  const { increment } = counterStore
  const { count, doubleCount } = storeToRefs(counterStore);
  const { getUser } = useUserStore();
  const { currentUser } = storeToRefs(useUserStore());
</script>

<template>
  <div class="text-white m-2">
  <p>{{ count }}</p>
  <p>{{ doubleCount }}</p>
  <button @click="increment" class="bg-green-500 hover:bg-green-700 cursor-pointer px-4 py-2 rounded-full">+</button>
  </div>

  <div class="text-white">
  <h1>User details</h1>
  <pre> {{  currentUser }}</pre>
  <button @click="getUser" class="bg-green-500 hover:bg-green-700 cursor-pointer px-4 py-2 rounded-full">Login</button>
  </div>
</template>

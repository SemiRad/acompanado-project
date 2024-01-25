<script setup lang="ts">

</script>

<template>
  <header>

    <div class="wrapper">
      <nav>
        <div class="flex justify-center text-red-600">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>

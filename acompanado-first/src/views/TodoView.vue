<script setup lang="ts">
    import { ref } from 'vue'
    import Todo from '../components/TodoList.vue'
    import { useTitle } from '@vueuse/core'

    useTitle('Todo List')
</script>

<template>
    <Todo />
</template>

<style>
</style>
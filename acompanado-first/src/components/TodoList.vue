<script setup lang="ts">
    import { useRetrieve, useTodo } from '../composables/useTodo'
    const { todos, fetchData } = useRetrieve()
    const { addTodo, deleteTodo } = useTodo()

</script>

<template>
    <div class="py-5 pl-10 text-blue-950">
      
      <h1 class="text uppercase font-['Poppins'] text-3xl text-amber-400 ml-5">Todo List</h1>
      <button @click="addTodo" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-3">Add Todo</button>
      <button @click="deleteTodo" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-3">Delete Todo</button>
      <ul>
        <li v-for="todo in todos" :key="todo.id" class="cursor-pointer rounded-2xl m-3 p-3 bg-gray-400 hover:scale-105 ease-in-out duration-300 w-auto">
          <p>id: {{ todo.id }}</p>
          <p>Title: {{ todo.title }}</p>
          <p>Completed: {{ todo.completed }}</p>
        </li>
      </ul>
    </div>
  </template>
  
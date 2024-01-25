<script setup lang="ts">
    import { ref } from 'vue'
    import { useFetch, useTitle } from '@vueuse/core'

    const { data, isFetching } = useFetch('https://jsonplaceholder.typicode.com/todos/1')
    const pageTitle = useTitle('Contact');

    function incrementTitle() {
        pageTitle.value += '!';
    }

    const textMsg = ref('')
    const Usermail = ref('')

    function notify(){
        if (textMsg.value == '' ||  Usermail.value == ''){
            return
        } else {
            alert("Message: " + textMsg.value + "\nEmail: " + Usermail.value)
        }
    }
</script>

<template>
    <div class="text-gray-50 m-3">
        <form>
        <h1>Contacts</h1>
        <textarea v-model="textMsg" placeholder="Send us a message" required>
            </textarea><br>
            <input v-model="Usermail" type="text" placeholder="Enter your email" required />
        <br>
        <input type="submit" value="Submit" @click="notify">
        </form>
        <h1>Contacts</h1>
        <p>data: {{ data }}</p>
        <button @click="incrementTitle" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-3">Append '!'</button>
    </div>
</template>

<style>
    textarea {
        width: 300px;
        height: 150px;
        font-family: 'Arial';
        font-size: 20px;
        border-radius: 16px;
        padding: 5px;
    }
    input[type=text] {
        width: 300px;
        border-radius: 16px;
        padding: 5px;
        margin-bottom: 5px;
    }
    input[type=submit]{
        width: 100px;
        background-color: #28a745;
        height: 36px;
        border: 0px solid;
        border-radius: 36px;
        color:white;
        font-size: 20px;
    }
    input[type=submit]:hover{
        scale: 1.1;
        cursor: pointer;
        background-color: #1f8838;
    }
</style>
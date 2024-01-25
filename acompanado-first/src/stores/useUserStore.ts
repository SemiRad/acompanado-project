import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
import type User from '../common/interfaces/IUser'
import { createUser } from "@/common/factories/user";

export const useUserStore = defineStore('user', () => {
    const currentUser: Ref<User | null> = ref(null)
    const endPoint = 'https://jsonplaceholder.typicode.com/users'

    async function getUser(){
        if (currentUser.value) return;
        await fetch(`${endPoint}/1`)
            .then(res => res.json())
            .then(data => {
                currentUser.value = createUser(data);
            })
    }
    
    return { currentUser, getUser }
})
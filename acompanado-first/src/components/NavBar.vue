<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="flex flex-nowrap min-h-screen ">
        <div class="w-64 bg-gray-50 border-r border-gray-200">
            <div class="py-4 px-6">
                <a href="/">
                    <p class="text-black font-bold text-xl font-['Poppins']">MILLER INTERNSHIP</p>
                </a>
                <p class="text-gray-400 font-['Poppins']">Raden Acompanado</p>
            </div>

            <div class="mb-10">
                <h3 class="mx-6 mb-2 mt-16 text-lg text-black-400 uppercase tracking-widest font-['Poppins'] py-1 px-2 hover:text-amber-400 rounded-2xl">
                    <RouterLink to="/">Home</RouterLink>
                </h3>
            </div>
            <div class="mb-10">
                <h3 class="mx-6 mb-2 text-lg text-black-400 uppercase tracking-widest font-['Poppins'] py-1 px-2 hover:text-amber-400 rounded-2xl">
                    <RouterLink to="/about">About</RouterLink>
                </h3>
            </div>
            <div class="mb-10">
                <h3 class="mx-6 mb-2 text-lg text-black-400 uppercase tracking-widest font-['Poppins'] py-1 px-2 hover:text-amber-400 rounded-2xl">
                    <RouterLink to="/contact">Contact</RouterLink>
                </h3>
            </div>
            <div class="mb-10">
                <h3 class="mx-6 mb-2 text-lg text-black-400 uppercase tracking-widest font-['Poppins'] py-1 px-2 hover:text-amber-400 rounded-2xl">
                    <RouterLink to="/todo">Todo</RouterLink>
                </h3>
            </div>
        </div>
            <RouterView />
        
    </div>
</template>

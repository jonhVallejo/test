<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex flex-col bg-gray-500">
    <div class="flex items-center overflow-hidden">
      <nav class="h-20">
        <RouterLink class="text-center text-lg p-4 mt-4" to="/movies">Movies</RouterLink>
        <RouterLink class="text-center text-lg p-4 mt-4" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="flex flex-col w-full h-screen overflow-x-hidden overflow-y-auto mb-14" />
</template>

<style>
body { 
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
}
</style>

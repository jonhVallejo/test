<template>
  <main>
    <div class="flex flex-col items-center">
      <list-movie-component class="h-60 pb-40"></list-movie-component>
      <list-characters-component class="pt-40"></list-characters-component>
    </div>
  </main>
</template>
<script setup>
  import ListMovieComponent from '@/components/ListMovieComponent.vue'
  import ListCharactersComponent from '@/components/ListCharactersComponent.vue'
</script>
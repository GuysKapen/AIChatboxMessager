<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import Nav from '@/components/Nav.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <Nav />
    <RouterView />
  </div>
</template>
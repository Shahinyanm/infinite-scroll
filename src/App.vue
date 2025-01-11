<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-900">Infinite Scroll Demo</h1>
      </div>
    </header>
    <main>
      <InfiniteScroll />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InfiniteScroll from './components/InfiniteScroll.vue';

export default defineComponent({
  name: 'App',
  components: { InfiniteScroll },
});
</script>
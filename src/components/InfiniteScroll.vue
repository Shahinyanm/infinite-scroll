<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <UserCard v-for="user in users" :key="user.email" :user="user" />
    </div>
    <div ref="loadMoreTrigger" class="h-10 flex items-center justify-center">
      <p v-if="isLoading" class="text-gray-600">Loading more users...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import { useInfiniteScroll } from '@/composables/useInfiniteScroll';
import { fetchUsers } from '@/services/api';
import UserCard from './UserCard.vue';
import type { User } from '@/types/user';

export default defineComponent({
  name: 'InfiniteScroll',
  components: { UserCard },
  setup() {
    const users: Ref<User[]> = ref([]);
    const page: Ref<number> = ref(1);
    const resultsPerPage = 20;

    const loadMore = async (): Promise<void> => {
      try {
        const response = await fetchUsers({ page: page.value, results: resultsPerPage });
        users.value.push(...response.results);
        page.value++;
      } catch (error) {
        console.error('Error loading users:', error);
      }
    };

    const { target: loadMoreTrigger, isLoading } = useInfiniteScroll(loadMore);

    return { users, loadMoreTrigger, isLoading };
  },
});
</script>

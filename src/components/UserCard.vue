<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <img :alt="fullName" :src="user.picture.medium" class="w-20 h-20 rounded-full mx-auto mb-4">
    <h2 class="text-xl font-semibold text-center mb-2">{{ fullName }}</h2>
    <p class="text-gray-600 text-center">{{ user.email }}</p>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, type PropType} from 'vue';
import type {User} from "@/types/user";

export default defineComponent({
  name: 'UserCard',
  props: {
    /**
     * The user object to display
     */
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  setup(props) {
    /**
     * Computed property for the user's full name
     * @returns {string} The user's full name
     */
    const fullName = computed(() => `${props.user.name.first} ${props.user.name.last}`);

    return {fullName};
  },
});
</script>
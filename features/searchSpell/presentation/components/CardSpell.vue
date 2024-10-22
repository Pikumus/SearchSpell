<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  name: string;
  incantation?: string;
  effect?: string;
  canBeVerbal?: true;
  type?: string;
  light?: string;
  creator?: string;
}>();

const showDetails = ref(false);

const goToDetail = () => {

};
</script>

<template>
  <div class="card bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto" @click="goToDetail">
    <h2 class="text-xl font-bold mb-2">{{ name }}</h2>
    <p class="text-gray-700">{{ type }}</p>
    <p v-if="light === 'Transparent'" :style="{ color: 'black' }" >
      {{ light }}
    </p>
    <p v-else :style="{ color: light }">
      {{ light }}
    </p>
    <div v-if="showDetails">
      <p>{{ incantation }}</p>
      <p>{{ canBeVerbal }}</p>
      <p>{{ creator }}</p>
    </div>
  </div>
</template>

<style scoped></style>

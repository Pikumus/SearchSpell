<script setup lang="ts">
import { ref } from "vue";

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

const goToDetail = () => {};
</script>

<template>
  <div class="card" @click="goToDetail">
    <h3>{{ name }}</h3>
    <div v-if="showDetails">
      <p>{{ incantation }}</p>
      <p>{{ canBeVerbal }}</p>
      <p>{{ type }}</p>
      <p>{{ light }}</p>
      <p>{{ creator }}</p>
    </div>
  </div>
</template>

<style scoped></style>

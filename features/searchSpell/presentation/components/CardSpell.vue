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
  showDetails?: boolean;
}>();


</script>

<template>
  <div
      class="card bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto"
  >
    <h2 class="text-xl font-bold mb-2">Название: {{ name }}</h2>
    <p class="text-gray-700">Тип: {{ type }}</p>
    <p
        v-if="light === 'Transparent'"
    >
      Цвет заклинания: {{ light }}
    </p>
    <p
        v-else-if="light === 'IcyBlue'"
        :style="{ color: 'blue' }"
    >
      Цвет заклинания: {{ light }}
    </p>
    <p v-else :style="{ color: light }">
      Цвет заклинания: {{ light }}
    </p>

    <div v-if="showDetails">
      <p>Заклинание: {{ incantation }}</p>
      <p v-if="canBeVerbal">Может быть устным: Да</p>
      <p v-else>Может быть устным: Нет</p>
      <p v-if="!creator">Создатель: неизвестен</p>
      <p>Эффект: {{ effect }}</p>
    </div>
  </div>
</template>

<style scoped></style>

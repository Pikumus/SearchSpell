<script setup lang="ts">
import { useRoute } from "vue-router";
import { useItemStore } from "@/features/searchSpell/domain/stores/item";
import { useAsyncData } from "nuxt/app";

// Получаем ID из маршрута
const route = useRoute();
const store = useItemStore();
const spellId = route.params.id as string;
// Получаем данные заклинания по ID

const { data: spell } = await useAsyncData(
  `fetchSpellsById-${spellId}`,
  async () => {
    return await store.fetchSpellsById(spellId); // Вызовите метод с spellId
  },
);
</script>

<template>
  <div v-if="spell">
    <h1>Название заклинания: {{ spell.name }}</h1>
    <p>Заклинание: {{ spell.incantation }}</p>
    <p>Тип: {{ spell.type }}</p>
    <p>Эффект: {{ spell.effect }}</p>
    <p
      v-if="spell.light === 'Transparent' || spell.light === 'icyBlue'"
      :style="{ color: 'black' }"
    >
      Цвет заклинания: {{ spell.light }}
    </p>
    <p v-else :style="{ color: spell.light }">
      Цвет заклинания: {{ spell.light }}
    </p>
    <p v-if="spell.canBeVerbal">Может быть устным: Да</p>
    <p v-else>Может быть устным: Нет</p>
    <p v-if="!spell.creator">Создатель: неизвестен</p>

    <p />
  </div>
  <div v-else>
    <p>Загрузка данных заклинания...</p>
  </div>
</template>

<style scoped></style>

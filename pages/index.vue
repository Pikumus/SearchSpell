<script setup lang="ts">
import { computed } from "vue";
import { useAsyncData } from "nuxt/app";
import { useItemStore } from "@/features/searchSpell/domain/stores/item";
import CardSpell from "@/features/searchSpell/presentation/components/CardSpell.vue";
import SearchBar from "@/features/searchSpell/presentation/components/SearchBar.vue";

const store = useItemStore();
const filter = computed(() => store.filteredItems);

const { data: spells, error } = await useAsyncData("fetchSpells", () =>
    store.fetchSpells(),
);
</script>

<template>
  <div class="container bg-gray-300 min-w-full h-screen overflow-auto">
    <header class="page-header flex justify-center items-center flex-col">
      <h1 class="text-3xl font-light">Список заклинаний</h1>
      <search-bar class="mb-5" />
    </header>
    <main class="mt-1">
      <div v-if="error" class="text-red-500">
        Ошибка при загрузке заклинаний.
      </div>
      <div v-else-if="!spells || spells.length === 0">Загружается...</div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(column, columnIndex) in Math.ceil(filter.length / 3)" :key="columnIndex" class="grid gap-4">
          <NuxtLink
              v-for="spell in filter.slice(columnIndex * 3, (columnIndex + 1) * 3)"
              :key="spell.id"
              :to="`/spell/${spell.id}`"
              class="h-auto max-w-full rounded-lg"
          >
            <card-spell
                :name="spell.name"
                :type="spell.type"
                :light="spell.light"
            />
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import {computed} from "vue";
import {useAsyncData} from "nuxt/app";
import {useItemStore} from "@/features/searchSpell/domain/stores/item";
import CardSpell from "@/features/searchSpell/presentation/components/CardSpell.vue";
import SearchBar from "@/features/searchSpell/presentation/components/SearchBar.vue";

const store = useItemStore();
const filter = computed(() => store.filteredItems);

const {data: spells, error} = await useAsyncData("fetchSpells", () =>
    store.fetchSpells(),
);

</script>

<template>
  <div class="container bg-gray-300 min-w-full h-screen overflow-auto">
    <header class="page-header flex justify-center items-center flex-col">
      <h1 class="text-3xl font-light">Список заклинаний</h1>
      <search-bar/>
    </header>
    <main class="mt-1">
      <div v-if="error" class="text-red-500">
        Ошибка при загрузке заклинаний.
      </div>
      <div v-else-if="!spells || spells.length === 0">Загружается...</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <NuxtLink
            v-for="spell in filter"
            :key="spell.id"
            :to="`/spell/${spell.id}`"
        >
          <card-spell
              :name="spell.name"
              :type="spell.type"
              :light="spell.light"
          />
        </NuxtLink>
      </div>
    </main>
  </div>
</template>

<style scoped></style>

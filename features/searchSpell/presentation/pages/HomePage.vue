<script setup lang="ts">
import SearchBar from "~/features/searchSpell/presentation/components/SearchBar.vue";
import { useItemStore } from "~/features/searchSpell/domain/stores/item";
import CardSpell from "~/features/searchSpell/presentation/components/CardSpell.vue";

const store = useItemStore();

const spells = computed(() => store.spells);
const filter = computed(() => store.filteredItems);

onMounted(async () => {
  await store.fetchSpells();
  console.log("Loaded products:", spells.value);
});
</script>

<template>
  <header class="page-header flex justify-center items-center flex-col">
    <h1>Список заклинаний</h1>
    <search-bar />
  </header>
  <main class="page-main">
    <div class="container">
      <div v-for="spell in filter" :key="spell.id">
        <card-spell :name="spell.name" :type="spell.type" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>

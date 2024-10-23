<script setup lang="ts">
import {useRoute} from "vue-router";
import {useItemStore} from "@/features/searchSpell/domain/stores/item";
import {useAsyncData} from "nuxt/app";
import CardSpell from "@/features/searchSpell/presentation/components/CardSpell.vue";


const route = useRoute();
const store = useItemStore();
const spellId = route.params.id as string;


const {data: spell} = await useAsyncData(
    `fetchSpellsById-${spellId}`,
    async () => {
      return await store.fetchSpellsById(spellId); // Вызовите метод с spellId
    },
);
</script>

<template>
  <div class="bg-gray-300 h-screen pt-10" v-if="spell">
    <CardSpell :show-details="true" :name="spell.name" :light="spell.light" :effect="spell.effect" :type="spell.type"
               :can-be-verbal="spell.canBeVerbal" :incantation="spell.incantation" :creator="spell.creator"/>

    <p/>
  </div>
  <div v-else>
    <p>Загрузка данных заклинания...</p>
  </div>
</template>

<style scoped></style>

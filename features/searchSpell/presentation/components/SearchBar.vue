<script lang="ts" setup>
import { ref } from "vue";
import { useItemStore } from "@/features/searchSpell/domain/stores/item";

const store = useItemStore();
const searchQuery = ref("");

const updateSearchQuery = (event: Event) => {
  const input = event.target as HTMLInputElement;
  searchQuery.value = input.value;
};
const searchSpells = () => {
  store.searchQuery = searchQuery.value;
  store.fetchSpells();
};
</script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="relative flex justify-between items-center w-1/2 h-10 mt-1 rounded-3xl bg-gray-200 overflow-hidden"
    >
      <input
        class="peer h-full w-full bg-gray-200 text-lg text-black placeholder-gray-500 outline-none pl-10 rounded-3xl"
        type="text"
        placeholder="Найти Заклинание"
        @input="updateSearchQuery"
        @keyup.enter="searchSpells()"
      />
      <svg
        class="absolute pl-2 m-1 items-center text-gray-500 peer-placeholder-shown:text-gray-500 peer-focus:text-black h-6 w-6 transition-colors duration-200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <button
        class="hidden md:inline bg-blue-500 text-white w-1/5 font-semibold font-size 1 py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        @click="searchSpells"
      >
        НАЙТИ
      </button>
    </div>
  </div>
</template>

<style lang="scss"></style>

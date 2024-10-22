import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { di } from "../../../../../di/di";

export const useItemStore = defineStore("homeStore", () => {
  // State
  const itemAll = ref<Item[]>([]); // Начальное значение - пустой массив
  const searchQuery = ref("");

  const fetchItemAll = async () => {
    try {
      const charAll = await di.catalogRepository.getAllProducts();
      itemAll.value = charAll;
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const filteredItems = computed(() => {
    if (!searchQuery.value) return itemAll.value;
    return itemAll.value.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
  });

  return {
    searchQuery,
    itemAll,
    fetchItemAll,
    filteredItems,
  };
});

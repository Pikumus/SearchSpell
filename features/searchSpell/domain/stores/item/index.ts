import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Item } from "~/features/searchSpell/domain/model/item";
import {CatalogNetworkRepository} from "~/features/searchSpell/data/repository/catalog_network_repository";

const catalogRepo = new CatalogNetworkRepository();
export const useItemStore = defineStore("homeStore", () => {
  // State
  const spells = ref<Item[]>([]); // Начальное значение - пустой массив
  const searchQuery = ref("");

  const fetchItemAll = async () => {
    try {
      const responses: Item[] = await catalogRepo.getAllProducts();
      spells.value = responses;
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const filteredItems = computed(() => {
    if (!searchQuery.value) return spells.value;
    return spells.value.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
  });

  return {
    searchQuery,
    spells,
    fetchItemAll,
    filteredItems,
  };
});

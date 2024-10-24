import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Spells } from "@/features/searchSpell/domain/model/spells";
import { CatalogNetworkRepository } from "@/features/searchSpell/data/repository/catalog_network_repository";

const catalogRepo = new CatalogNetworkRepository();
export const useItemStore = defineStore("homeStore", () => {
  // State
  const spells = ref<Spells[]>([]); // Начальное значение - пустой массив
  const searchQuery = ref("");
  const spell = ref<Spells | null>(null);
  const fetchSpells = async () => {
    try {
      const responses: Spells[] = await catalogRepo.getSpells();
      spells.value = responses;
      return responses;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
  };
  const fetchSpellsById = async (id: string) => {
    try {
      const response: Spells = await catalogRepo.getSpellById(id);
      spell.value = response;
      return response;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
  };
  const filteredItems = computed(() => {
    if (!searchQuery.value.trim()) return spells.value;
    return spells.value.filter((spell) =>
        spell.name.toLowerCase().trim().includes(searchQuery.value.toLowerCase().trim()),
    );
  });


  return {
    fetchSpellsById,
    searchQuery,
    spells,
    fetchSpells,
    filteredItems,
  };
});

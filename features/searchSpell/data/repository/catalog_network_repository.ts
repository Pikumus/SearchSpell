import {CatalogRepository} from "../../domain/repository/catalog_repository";
import type {Spells} from "../../domain/model/spells";
import axios from "axios";

export class CatalogNetworkRepository extends CatalogRepository {
    async getSpells(): Promise<Spells[]> {
        try {
            const response = await axios.get<Spells[]>(
                "https://wizard-world-api.herokuapp.com/Spells",
            );
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw new Error("Failed to fetch items");
        }
    }
    async getSpellById(id: string): Promise<Spells> {
        try {
            const response = await axios.get<Spells>("https://wizard-world-api.herokuapp.com/Spells/" + id);
            return response.data
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }
}

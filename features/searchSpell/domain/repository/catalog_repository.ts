import type { Item } from "~/features/searchSpell/domain/model/item";

export abstract class CatalogRepository {
  abstract getAllProducts(): Promise<Item[]>;
}

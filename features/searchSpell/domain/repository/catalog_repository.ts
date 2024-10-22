import type { Spells } from "~/features/searchSpell/domain/model/spells";

export abstract class CatalogRepository {
  abstract getSpells(): Promise<Spells[]>;
}

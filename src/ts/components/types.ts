export interface PokemonList {
  name: string;
  type: string;
}

export interface PokemonStructure {
  render: () => void;
  remove: () => void;
}

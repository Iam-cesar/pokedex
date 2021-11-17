
export function usePokemonChainEvolution (data) {
  return {
    evolutionInitial: {
      name: data.chain?.species.name || '',
      url: data.chain?.species.url || ''
    },
    evolutionMiddle: {
      name: data.chain?.evolves_to[0]?.species.name || '',
      url: data.chain?.evolves_to[0]?.species.url || ''
    },
    evolutionFinal: {
      name: data.chain?.evolves_to[0]?.evolves_to[0]?.species.name || '',
      url: data.chain?.evolves_to[0]?.evolves_to[0]?.species.url || ''
    }
  }
}

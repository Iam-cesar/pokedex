import { PokemonContext } from 'context/pokemon'
import { useContext } from 'react'

export function usePokemon () {
  return useContext(PokemonContext)
}

import { useContext } from 'react'
import { PokemonContext } from 'context/pokemon'

export function usePokemon () {
  return useContext(PokemonContext)
}

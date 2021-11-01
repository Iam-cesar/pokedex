import { cardConfig } from 'components/UI/mixins'
import styled from 'styled-components'

export const PokemonListContainer = styled.div`
  ${cardConfig}
  grid-area: list;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2em 0;
`

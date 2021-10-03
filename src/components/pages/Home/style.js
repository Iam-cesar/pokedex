import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, auto);
  grid-template-areas: "search search search search"
                       "main main main info"
                       "evolution-1 evolution-2 evolution-3 info"
                       "type after before info"
                       "footer footer footer info";
`

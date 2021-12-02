import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-area: home;
  grid-template-columns: 17% 17% 17% auto;
  grid-template-rows: 0 5% 23% 2% 20% 2% 20% 8% 0;
  grid-template-areas: ". . . ."
                       "search search search search"
                       "main main main group"
                       "title__evolution title__evolution title__evolution group"
                       "evolution evolution evolution group"
                       "title__type title__type title__type group"
                       "type statsInfo statsInfo group"
                       "footer footer footer group"
                       ". . . .";
  gap: 20px;
  margin-left: 3rem;
  max-width: 88%;
`

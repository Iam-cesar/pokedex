import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-area: home;
  grid-template-columns: 17% 17% 17% auto;
  grid-template-rows: 0 5% 23% 2% 23% 2% 16% 8% 0;
  grid-template-areas: ". . . ."
                       "search search search search"
                       "main main main list"
                       "title__evolution title__evolution title__evolution list"
                       "evolution evolution evolution list"
                       "title__type title__type title__type list"
                       "type previus next list"
                       "footer footer footer list"
                       ". . . .";
  gap: 20px;
  margin-left: 5rem;
  max-width: 90%;
`

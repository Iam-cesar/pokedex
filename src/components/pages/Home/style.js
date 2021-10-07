import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-area: home;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: .4% 5% 25% 2% 18% 2% 20% 8% .4%;
  grid-template-areas: ". . . ."
                       "search search search search"
                       "main main main info"
                       "title__evolution title__evolution title__evolution info"
                       "evolution__1 evolution__2 evolution__final info"
                       "title__type title__type title__type info"
                       "type previus next info"
                       "footer footer footer info"
                       ". . . .";
  gap: 20px;
  padding: 0 100px;
`

import styled from 'styled-components'
import {
  screen400px,
  screen800px
} from 'components/UI/responsive'

export const HomeContainer = styled.main`
  display: grid;
  grid-area: home;
  grid-template-columns: auto auto auto;
  grid-template-rows:  5% 23% 2% 20% 2% 20% auto 8% ;
  grid-template-areas: "search search search"
                       "main main main"
                       "title__evolution title__evolution title__evolution"
                       "evolution evolution evolution"
                       "title__type title__type title__type"
                       "type statsInfo statsInfo"
                       "group group group"
                       "footer footer footer";
  gap: 20px;
  margin: 1rem;

  ${screen400px}
  ${screen800px}
`

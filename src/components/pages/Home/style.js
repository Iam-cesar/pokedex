import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 5% 27% 2% 20% 2% 20% 8%;
  grid-template-areas: "aside search search search search"
                       "aside main main main info"
                       "aside title__evolution title__evolution title__evolution info"
                       "aside evolution__1 evolution__2 evolution__final info"
                       "aside title__type title__type title__type info"
                       "aside type previus next info"
                       "aside footer footer footer info";
  gap: 20px;
  height: 100vh;
  padding: 24px;
`

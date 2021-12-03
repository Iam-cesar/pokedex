import styled from 'styled-components'
import {
  screen400px,
  screen800px
} from 'components/UI/responsive'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin: 1rem;

  ${screen400px}
  ${screen800px}
`

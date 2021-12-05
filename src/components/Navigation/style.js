import styled from 'styled-components'
import { navContainer450px } from 'components/UI/responsive'
export const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  gap: 20px;

  h1{
    font-size: 2rem;
  }
  
  ${navContainer450px}
`

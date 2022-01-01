import styled from 'styled-components'

export const navContainer = `
  @media screen and (max-width: 450px){
    gap: 0;

    h1{
      font-size: 1.5rem;
    }

    img{
      width: 80%;
    }
  }
`

export const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  gap: 20px;

  h1{
    font-size: 2rem;
  }
  
  ${navContainer}
`

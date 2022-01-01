import styled from 'styled-components'

export const mainContent = `
  @media screen and (max-width: 850px){
    flex-direction: column;

    div{
      width: 100%;
    }
  }
`

export const MainContentContainer = styled.section`
  display: flex;
  gap: inherit;

  ${mainContent}
`

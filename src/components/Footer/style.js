import { cardConfig } from 'components/UI/mixins'
import { $white } from 'components/UI/colors'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
  ${cardConfig}
  display: grid;
  grid-area: footer;
  place-items: center;

  a{
    color: ${$white};
    text-decoration: none;

    :hover{
      text-decoration: underline;
    }
  }
`

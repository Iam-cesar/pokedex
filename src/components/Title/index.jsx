import { TitleContainer } from './style'
import React from 'react'
import PropTypes from 'prop-types'

Title.propTypes = {
  HtmlSize: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object
}

function Title ({ HtmlSize, text, style }) {
  return (
    <TitleContainer style={style} >
      <HtmlSize>
        {text}
      </HtmlSize>
    </TitleContainer>
  )
}

export default Title

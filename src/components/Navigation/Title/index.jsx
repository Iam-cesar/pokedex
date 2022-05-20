import PropTypes from 'prop-types'
import React from 'react'
import { TitleContainer } from './style'

function Title ({ HtmlSize, text, style, className }) {
  return (
    <TitleContainer
      style={style}
      className={className}>
      <HtmlSize>
        {text}
      </HtmlSize>
    </TitleContainer>
  )
}

Title.propTypes = {
  HtmlSize: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
}

export default Title

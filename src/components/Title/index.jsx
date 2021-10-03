import { Container } from 'components/UI/common/Container'
import React from 'react'
import PropTypes from 'prop-types'
Title.propTypes = {
  HtmlSize: PropTypes.checkPropTypes(),
  text: PropTypes.string
}
function Title ({ HtmlSize, text }) {
  return (
    <Container>
      <HtmlSize>
        {text}
      </HtmlSize>
    </Container>
  )
}

export default Title

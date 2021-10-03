import { Container } from 'components/UI/common/Container'
import React from 'react'
import PropTypes from 'prop-types'

IconImg.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

function IconImg ({ img, alt }) {
  return (
    <Container>
      <img src={img} alt={alt} />
    </Container>
  )
}

export default IconImg

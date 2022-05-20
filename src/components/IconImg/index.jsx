import PropTypes from 'prop-types'
import React from 'react'
import { IconImgContainer } from './style'

function IconImg ({ img, alt, className }) {
  return (
    <IconImgContainer
      className={className}
    >
      <img data-testid="logo-image-pokeball" src={img} alt={alt} />
    </IconImgContainer>
  )
}

IconImg.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default IconImg

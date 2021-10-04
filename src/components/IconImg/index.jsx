import { IconImgContainer } from './style'
import React from 'react'
import PropTypes from 'prop-types'

IconImg.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

function IconImg ({ img, alt, className }) {
  return (
    <IconImgContainer
      className={className}
    >
      <img src={img} alt={alt} />
    </IconImgContainer>
  )
}

export default IconImg

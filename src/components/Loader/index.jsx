import React from 'react'
import { LoaderContainer } from './style'
import PropTypes from 'prop-types'

Loader.propTypes = {
  className: PropTypes.string
}

function Loader ({ className }) {
  return (
    <LoaderContainer className={className} />
  )
}

export default Loader

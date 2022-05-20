import PropTypes from 'prop-types'
import React from 'react'
import { LoaderContainer } from './style'

Loader.propTypes = {
  className: PropTypes.string
}

function Loader ({ className }) {
  return (
    <LoaderContainer className={className} />
  )
}

export default Loader

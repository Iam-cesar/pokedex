import React, { useState, createContext } from 'react'
import PropTypes from 'prop-types'

export const LoaderContext = createContext({})
LoaderContext.displayName = 'Loader'
LoaderProvider.propTypes = {
  children: PropTypes.node
}

export function LoaderProvider ({ children }) {
  const [loader, setLoader] = useState(true)
  return (
    <LoaderContext.Provider value={{
      loader,
      setLoader
    }}>
      {children}
    </LoaderContext.Provider>
  )
}

import PropTypes from 'prop-types'
import React, { createContext, useState } from 'react'

export const LoaderContext = createContext()

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

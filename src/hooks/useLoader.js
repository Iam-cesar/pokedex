import { LoaderContext } from 'context/loader'
import { useContext } from 'react'

export function useLoader () {
  return useContext(LoaderContext)
}

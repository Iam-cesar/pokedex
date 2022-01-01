import { useContext } from 'react'
import { LoaderContext } from 'context/loader'

export function useLoader () {
  return useContext(LoaderContext)
}

/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Evolution from '.'
import usePokemon from 'hooks/usePokemon'

describe('Evolution component', () => {
  it('should have at least one item', () => {
    const { pokemon } = usePokemon()
    render(<Evolution />)
    expect(screen.debug(pokemon))
  })
})

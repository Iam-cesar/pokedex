/* eslint-disable no-undef */
import React from 'react'
import { screen, render } from '@testing-library/react'
import Navigation from '.'

describe('Navigation component', () => {
  it('Have page title', () => {
    render(<Navigation />)
    expect(screen.getByText('Pokedex'))
  })

  it('have lotipo pokeball', () => {
    render(<Navigation />)
    expect(screen.getByAltText('logotipo pokebola'))
  })
})

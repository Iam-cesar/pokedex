import { usePokemon } from 'hooks/usePokemon'
import React, { useEffect, useState } from 'react'
import { StatsInfoContainer } from './style'
import handleTranslate from './utils/handleTranslate'

function Statistics () {
  const { pokemon } = usePokemon()
  const [stats, setStats] = useState([])

  useEffect(() => {
    setStats(pokemon.stats)
  }, [pokemon.stats])

  return (
    <StatsInfoContainer>
      <tbody>
        {stats.map((item, index) => {
          return (
            <tr key={index}>
              <td>{handleTranslate(item?.stat.name)}</td>
              <td className='pokemon__info__stats__number'>{item?.base_stat}</td>
            </tr>
          )
        })}
      </tbody>
    </StatsInfoContainer>
  )
}

export default Statistics

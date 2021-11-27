import { StatsInfoContainer } from './style'
import React, { useEffect, useState } from 'react'
import { usePokemon } from 'hooks/usePokemon'

function StatsInfo () {
  const { response } = usePokemon()
  const [stats, setStats] = useState([])

  useEffect(() => {
    setStats(response.stats)
  }, [response.stats])

  function handleTranslateStats (stat) {
    const stats = {
      hp: 'Vida',
      attack: 'Ataque',
      defense: 'Defesa',
      'special-attack': 'Ataque especial',
      'special-defense': 'Defesa especial',
      speed: 'Velocidade'
    }
    return stats[stat]
  }

  return (
    <StatsInfoContainer>
      <tbody>
        {stats.map((item, index) => {
          return (
            <tr key={index}>
              <td>{handleTranslateStats(item?.stat.name)}</td>
              <td className='pokemon__info__stats__number'>{item?.base_stat}</td>
            </tr>
          )
        })}
      </tbody>
    </StatsInfoContainer>
  )
}

export default StatsInfo

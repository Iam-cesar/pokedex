function handleTranslate (statsName) {
  const stats = {
    hp: 'Vida',
    attack: 'Ataque',
    defense: 'Defesa',
    'special-attack': 'Ataque especial',
    'special-defense': 'Defesa especial',
    speed: 'Velocidade'
  }
  return stats[statsName]
}

export default handleTranslate

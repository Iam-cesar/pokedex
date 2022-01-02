
export const cardConfig = `
  background-color: rgba(242, 242, 242, .1);
  backdrop-filter: blur(1px);
  border-radius: 15px;
  `
export function stylingPokemonId (id) {
  if (!id) { return }
  return id < 10
    ? `#00${id}`
    : id < 100
      ? `#0${id}`
      : `#${id}`
}

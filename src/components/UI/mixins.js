
export const cardConfig = `
  background-color: rgba(242, 242, 242, .1);
  backdrop-filter: blur(1px);
  border-radius: 15px;
  `
export function stylingPokemonId (response) {
  if (response.id) {
    return response.id < 10
      ? `#00${response.id}`
      : response.id < 100
        ? `#0${response.id}`
        : `#${response.id}`
  }
}

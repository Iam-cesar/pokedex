export default (name) => {
  if (name.includes('incarnate')) { name = name.replace('-incarnate', '') }
  if (name.includes('ordinary')) { name = name.replace('-ordinary', '') }
  if (name.includes('aria')) { name = name.replace('-aria', '') }
  if (name.includes('baile')) { name = name.replace('-baile', '') }
  if (name.includes('red')) { name = name.replace('-red', '') }
  if (name.includes('meteor')) { name = name.replace('-meteor', '') }
  if (name.includes('altered')) { name = name.replace('-altered', '') }
  if (name.includes('striped')) { name = name.replace('-striped', '') }

  return name
}

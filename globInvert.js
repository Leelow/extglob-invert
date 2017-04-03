function extTrim (str) {
  str = str.trim()
  while (str[0] === '(' && str[str.length - 1] === ')') str = simplifybang(str.slice(1, -1).trim())
  return str
}

function simplifybang (str) {
  str = str.trim()
  var first = str[0]
  var left = str.slice(1)
  while (first === '!' && left[0] === '!') str = left.slice(1)
  return str
}

module.exports = function (extGlob) {
  if (typeof extGlob !== 'string') throw new Error('The glob must be a string.')
  extGlob = extTrim(extGlob)

  if (extGlob[0] === '!') return extTrim(extGlob.slice(1))
  else return '!(' + extGlob + ')'
}

console.log(module.exports('((!!!!!!!abc))'))
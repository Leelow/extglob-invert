var regexes = {
  externalParenthesis: /^\s*\(\s*(.*?)\s*\)\s*$/,
  doubleBang: /^(\s*!\s*!\s*(.*?)\s*)$/,
  negativeParenthesis: /^\s*!\s*\(\s*(.*?)\s*\)\s*$/,
  negativeSimple: /^\s*!\s*(.*?)\s*$/
}

function removeExternalParenthesis (str) {
  var matches = str.match(regexes.externalParenthesis)
  return matches ? {updated: true, res: matches[1]} : {updated: false, res: str}
}

function removeDoubleBang (str) {
  var matches = str.match(regexes.doubleBang)
  return matches ? {updated: true, res: matches[2]} : {updated: false, res: str}
}

function extTrim (str) {
  var updated
  do {
    var externalParenthesis = removeExternalParenthesis(str)
    var doubleBang = removeDoubleBang(externalParenthesis.res)
    str = doubleBang.res
    updated = externalParenthesis.updated || doubleBang.updated
  } while (updated)
  return str
}

function negate (str) {
  var matches = str.match(regexes.negativeParenthesis)
  if (matches && matches[1]) return extTrim(matches[1])
  matches = str.match(regexes.negativeSimple)
  if (matches && matches[1]) return extTrim(matches[1])
  else return '!(' + str.trim() + ')'
}

module.exports = function (arg) {
  if (Array.isArray(arg)) {
    return arg.map(function (item) {
      return negate(extTrim(item))
    })
  } else if (typeof arg === 'string') return negate(extTrim(arg))
  else throw new Error('The argument must be a string or a string array.')
}

module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(pair => pair.join(''))
  for (let i = 0; i < brackets.length;) {
    if (str.includes(brackets[i])) {
      str = str.replace(brackets[i], '')
      i = 0
    }
    else i++
  }
  return str === ''
}

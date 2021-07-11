module.exports = function toReadable (number) {
    const renge = {
    '1-9': ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    '10-19': ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    '20-90': ["", "","twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
  }
  const str = String(number)

  const lengthNum = {
    1: oneNumeric,
    2: twoNumeric,
    3: threeNumeric

  }

  return lengthNum[str.length](str)

  function oneNumeric(str) {
    return renge['1-9'][str]
  }
  function twoNumeric(str) {
    return str[0] == 1 ? renge['10-19'][str[1]] : str[1] == 0 ? renge['20-90'][str[0]] : renge['20-90'][str[0]] + ' ' + oneNumeric(str[1])
  }
  function threeNumeric(str) {
    return str[1] == 0 && str[2] == 0 ? oneNumeric(str[0]) + ' ' + 'hundred' :
           str[1] == 0 ? oneNumeric(str[0]) + ' ' + 'hundred' + ' ' + oneNumeric(str[2]) : oneNumeric(str[0]) + ' ' + 'hundred' + ' ' + twoNumeric(str[1] + str[2])
  }
}

function randomChar(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

function shorten() {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const upperCase = lowerCase.toUpperCase()
  const num = '1234567890'
  const pool = lowerCase + upperCase + num

  let shortUrl = ''
  for (let i = 1; i <= 5; i++) {
    shortUrl += randomChar(pool)
  }
  return shortUrl
}


module.exports = shorten
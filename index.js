function theBeatlesPlay(musicians, instruments) {
  var gecici = []
  for (i = 0; i <= musicians.length; i++) {
    gecici[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return gecici
}
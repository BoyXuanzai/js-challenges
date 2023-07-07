function findMostWord (article) {
  if (!article) return 
  article = article.trim().toLowerCase()
  let wordList = article.match(/[a-z]+/g)
  let maxNum = 0
  let maxWord = ""
  let visited = []
  article = " " + wordList.join(" ") + " "
  wordList.forEach(item => {
    if (visited.indexOf(item) < 0) {
      visited.push(item)
      let word = new RegExp(' ' + item + ' ', 'g')
      num = article.match(word).length
      if (num > maxNum) {
        maxNum = num
        maxWord=item
      }
    }
  })
  return maxWord + " " + maxNum
}
let article =
  'Moreover, serendipity can have a transformative effect on personal growth. Sometimes, our most profound life lessons come from unforeseen experiences or encounters. Losing a job might lead to the discovery of a new passion or career path. A chance encounter with a stranger might offer a different perspective that alters our worldview. These unexpected twists and turns shape us into the individuals we are meant to become.';
const res = findMostWord(article);
console.log(res);

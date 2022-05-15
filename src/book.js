function createTitle(title) {
  var modifiedTitle = "The " + title;
  return modifiedTitle;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
}

function saveReview(newReview, reviews) {
  // If the text of the newReview matches any existing review, don't add it
  if(reviews.includes(newReview)){
  } else {
    reviews.push(newReview)
  }
}

function calculatePageCount(title) {
  var pageCount = title.length * 20
  return pageCount
}

function writeBook(title, character, genre){
  return {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
}

function editBook(book){
  book.pageCount = book.pageCount * (3/4)
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

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

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}

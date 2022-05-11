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
  return character
}

module.exports = {
  createTitle,
  buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}

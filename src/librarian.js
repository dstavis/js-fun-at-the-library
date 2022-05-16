class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning){
    if(isMorning){
      return `Good morning, ${name}!`
    } else{
      return `Hello, ${name}!`
    }
  }

  findBook(title){
    var bookFound = false;
    var shelves = this.library.shelves
    var genreNames = Object.keys(shelves)
    // for each key in the shelves object,
    // for each genre shelf, look through every book in that shelf one by one
    for(var i = 0;i < genreNames.length;i++) {
      var genreName = genreNames[i]
      var shelf = shelves[genreName]

      for(var j = 0; j < shelf.length;j++) {
        var book = shelf[j]
        // does that book's title match the title of the book we're looking for?
        if(book.title == title){
          // if so, set bookFound to true
          bookFound = true;
          // and check out that book
          shelf.splice(j)
        }
      }
    }

    if(bookFound){
      return `Yes, we have ${title}`
    } else {
      return `Sorry, we do not have ${title}`
    }
  }

  calculateLateFee(days){
    var fee = Math.ceil((days * 0.25))
    return fee;
  }
}

module.exports = Librarian;

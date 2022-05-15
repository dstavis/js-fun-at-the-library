function createLibrary(name){
  return{
      name: name,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: []
      }
  }
}

function addBook(library, book){
  library.shelves[book.genre].push(book)
}

function checkoutBook(library, title, genre){
  var checkOutTitle = null;
  var shelf = library.shelves[genre]

  // for each book in the shelf of the specified genre
  for(var i = 0;i < shelf.length;i++){
    // does this book's title match the title of the book we're looking for?
    if(shelf[i].title === title){
        // if so, remove it from the shelf, and set checkOutTitle to its title
        var removedBook = shelf.splice(i, 1)[0]
        checkOutTitle = removedBook.title
    }
  }

  if(checkOutTitle == null){
    return `Sorry, there are currently no copies of ${title} available at the Denver Public Library`
  } else{
    return `You have now checked out ${checkOutTitle} from the Denver Public Library`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};

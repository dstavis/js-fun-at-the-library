function shelfBook(book, shelf){
  if(shelf.length < 3){
      shelf.unshift(book)
  }
}

function unshelfBook(bookTitle, shelf){
  for(var i = 0; i < shelf.length; i++){
    if(shelf[i].title == bookTitle){
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelf){
  var titles = ``
  for(var i = 0; i<shelf.length; i++){
    if(i == (shelf.length - 1)){ // if this is the last element in the array, don't put a comma after it
        titles += shelf[i].title
    } else { // else there will be more titles to come, so add a comma and space after this one
      titles += shelf[i].title + ", "
    }
  }
  return titles;
}

function searchShelf(shelfToSearch, titleOfTheBookToSearchFor){
  var hasABookWithAMatchingTitleBeenFound = false;

  for(var currentIndex = 0;currentIndex < shelfToSearch.length;currentIndex++) {
    var bookFromShelf = shelfToSearch[currentIndex]
    if (bookFromShelf.title === titleOfTheBookToSearchFor){
      hasABookWithAMatchingTitleBeenFound = true;
    }
  }

  return hasABookWithAMatchingTitleBeenFound;
}


// Alternate implementation


// function searchShelf(shelfToSearch, titleOfTheBookToSearchFor){
//
//   for(var currentIndex = 0;currentIndex < shelfToSearch.length;currentIndex++) {
//     var bookFromShelf = shelfToSearch[currentIndex]
//     if (bookFromShelf.title === titleOfTheBookToSearchFor){
//       return hasABookWithAMatchingTitleBeenFound;
//     }
//   }
//
//   return false;
// }



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

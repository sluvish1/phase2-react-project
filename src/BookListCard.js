import React from "react";


function BookListCard({ eachBook, allBooks, setAllBooks, readLater, setReadLater }) {
  
  const styling = {
    width: "140px"
  }

  function handelButtonClick() {
   /* when the button is clicked we filter though all of the books and we want 
   to return all of the books that were notn add to the Readlater list so that they stay on the
   main page then we setAll books to equal all of the books that werent added
   and setReadLater to eachBook that was added so that the books that were pick will display on ReadLater*/
    const books = allBooks.filter((bookNotOnReadLater) => {
      if (eachBook !== bookNotOnReadLater) {
        return bookNotOnReadLater;
      }
    })
    //setAllBooks to the book that are left on the page.
    setAllBooks(books)
    //console.log(books)
    //making a copy of the readLater array and add the books we want to read later to it
    setReadLater([...readLater, eachBook])
}


  return (
    <div className="bookCard">
          <h3>Title: {eachBook.title} </h3>
          <p><b>Author:</b> {eachBook.author}</p>
          <p><b>Summary:</b> {eachBook.summary}</p>
          <p><b>Genre:</b> {eachBook.genre}</p>
          <img src={eachBook.image} alt={eachBook.title} style={styling}/>
          <button type="submit" onClick={handelButtonClick}>Read Later</button>
        
    </div>
  );
}

export default BookListCard
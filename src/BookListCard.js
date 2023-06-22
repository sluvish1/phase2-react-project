import React from "react";


function BookListCard({eachBook, allBooks, setAllBooks, readLater, setReadLater}) {

  function handelButtonClick() {
   // console.log("hello")
   const books = allBooks.filter((bookObj) => {
   if (eachBook !== bookObj) {
    return bookObj
   }
   })
    setAllBooks(books)
    setReadLater([ ...readLater, eachBook ])
}


  return (
    <div className="bookCard">
          <h3>Title: {eachBook.title} </h3>
          <p><b>Author:</b> {eachBook.author}</p>
          <p><b>Summary:</b> {eachBook.summary}</p>
          <p><b>Genre:</b> {eachBook.genre}</p>
          <img src={eachBook.image} alt={eachBook.title} />
          <button type="submit" onClick={handelButtonClick}>Read Later</button>
        
    </div>
  );
}

export default BookListCard
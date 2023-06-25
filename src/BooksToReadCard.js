import React from "react";

function BooksToReadCard({eachBook,readLater,setReadLater}) {
   // console.log(readLater)

//readLater is now the holder of all the books on this page.
    function handelBooksCompleted() {
    const booksCompleted = readLater.filter((booksNotFinished) => {
          if (eachBook !== booksNotFinished) {
           return booksNotFinished;
          }
    });
       setReadLater(booksCompleted)
    }

    function handelRemoveBook() {
        return (
            console.log("book deleted")
        )
    }



    return (
      <div className="booksToReadCard">
            <h3>Title: {eachBook.title } </h3>
            <p><b>Author:</b>{eachBook.author}</p>
          <p><b>Summary:</b> {eachBook.summray}</p>
            <p><b>Genre:</b>{eachBook.genre} </p>
          <img src={eachBook.image} alt={eachBook.title} />
          <button type="submit" onClick={handelRemoveBook}>Remove Book</button> 
          <button type="submit" onClick={handelBooksCompleted}>Completed Book</button>
      </div>
    );
}

export default BooksToReadCard
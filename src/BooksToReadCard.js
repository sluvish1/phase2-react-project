import React from "react";

  const styling = {
    width: "140px",
  };

function BooksToReadCard({ eachBook, readLater, setReadLater, setBooksCompleted, booksCompleted, allBooks, setAllBooks}) {

  // console.log(readLater)

  //readLater is now the holder of all the books on this page.
  function handelBooksCompleted() {
    //filters through all the books on the list and will remove all the books that are completed and return all of the uncompleted books on the page.
    const booksFinished = readLater.filter((booksNotFinished) => {
      if (eachBook !== booksNotFinished) {
        return booksNotFinished;
      }
    });
    //this will set all the 
    setReadLater(booksFinished);
    setBooksCompleted([...booksCompleted, eachBook]);
  }

//function not working
  function handelRemoveBook() {
   const removeBook = readLater.filter((bookRemoved) => {
      if (eachBook !== bookRemoved) {
        return bookRemoved
      }
   })
    setReadLater(removeBook)
    console.log(allBooks)
    setAllBooks([...allBooks, eachBook]);
  }

  return (
    <div className="booksToReadCard">
      <h3>Title: {eachBook.title} </h3>
      <p>
        <b>Author:</b>
        {eachBook.author}
      </p>
      <p>
        <b>Summary:</b> {eachBook.summray}
      </p>
      <p>
        <b>Genre:</b>
        {eachBook.genre}{" "}
      </p>
      <img src={eachBook.image} alt={eachBook.title} style={styling}/>
      <button type="submit" onClick={handelRemoveBook}>
        Remove Book
      </button>
      <button type="submit" onClick={handelBooksCompleted}>
        Completed Book
      </button>
    </div>
  );
}

export default BooksToReadCard
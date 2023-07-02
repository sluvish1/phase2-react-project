import React from "react";
import BookForm from "./BookForm";
import BookListCard from "./BookListCard";

/* the book list will take in the data from the form and add the new book created
on to the list and display the books. then the user will be able to go thru all
 the books that are on the list and add the ones their intrested in onto their read
 later list */
function BooksList({ readLater, setReadLater, allBooks, setAllBooks }) {
 
  const displayBooks = allBooks.map((eachBook) => (
    <BookListCard
      eachBook={eachBook}
      key={eachBook.id}
      allBooks={allBooks}
      setAllBooks={setAllBooks}
      readLater={readLater}
      setReadLater={setReadLater}
    />
  ));

  return (
    <div>
      <BookForm
        allBooks={allBooks}
        setAllBooks={setAllBooks} />
      <h2>Books To Read</h2>
      {displayBooks}
    </div>
  );
}

export default BooksList;

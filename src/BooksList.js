import React, { useState, useEffect } from "react";
import BookForm from "./BookForm";
import BookListCard from "./BookListCard";

/* the book list will take in the data from the form and add the new book created
on to the list and display the books. then the user will be able to go thru all
 the books that are on the list and add the ones their intrested in onto their read
 later list */
function BooksList() {

    const[allBooks, setAllBooks]=useState([])

    useEffect(() => {
        fetch(" http://localhost:3000/books")
          .then((r) => r.json())
          .then((allBooks) => setAllBooks(allBooks));
    }, [])

  return (
    <div>
          <BookForm />
          <h2>Books To Read</h2>
          <BookListCard/>
    </div>
  );
}

export default BooksList;

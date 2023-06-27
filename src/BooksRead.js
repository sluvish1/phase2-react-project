import React from "react";
import BooksReadCard from "./BooksReadCard";


/* this will display all the book that the user has read */
//

function BooksRead({ booksCompleted, setBooksCompleted }) {

    const booksDone = booksCompleted.map((eachBook) => (
        <BooksReadCard
            key={eachBook.id}
            eachBook={eachBook}
            setBooksCompleted={setBooksCompleted}
           />
    ))
  return (
    <div>
          {booksDone}
 
    </div>
  );
}

export default BooksRead
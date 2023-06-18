import React from "react";
import BookForm from "./BookForm";


/* the book list will take in the data from the form and add the new book created
on to the list and display the books. then the user will be able to go thru all
 the books that are on the list and add the ones their intrested in onto their read
 later list */
function BooksList() {


    return (
        <div>
            <BookForm />
        </div>
    )
}

export default BooksList
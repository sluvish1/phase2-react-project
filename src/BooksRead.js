import React from "react";
import BooksReadCard from "./BooksReadCard";

/* this will display all the book that the user has read */

function BooksRead({allBooks}) {
    

    return (
        <div>
            <BooksReadCard/>
        </div>
    )
}

export default BooksRead
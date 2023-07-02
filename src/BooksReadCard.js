import React from "react";
//import Notes from "./Notes";

  const styling = {
    width: "140px",
  };

function BooksReadCard({ eachBook, setBooksCompleted }) {

console.log(eachBook)

    return (
      <div className="booksReadCard">
        <h3>Title:{eachBook.title} </h3>
          <p><b>Author:</b>{eachBook.author} </p>
            <p><b>Genre:</b>{eachBook.genre} </p>
            <img src={eachBook.image} alt={eachBook.title} style={styling} />
      </div>
    );
}

export default BooksReadCard
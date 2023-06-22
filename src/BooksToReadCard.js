import React from "react";

function BooksToReadCard({eachBook}) {




    return (
      <div className="booksToReadCard">
            <h3>Title: {eachBook.title } </h3>
            <p><b>Author:</b>{eachBook.author}</p>
          <p><b>Summary:</b> {eachBook.summray}</p>
            <p><b>Genre:</b>{eachBook.genre} </p>
          <img src={eachBook.image} alt={eachBook.title} />
          <button type="submit">Remove Book</button> 
          <button type="submit">Completed Book</button>
      </div>
    );
}

export default BooksToReadCard
import React from "react";

function BookListCard({eachBook}) {


  return (
    <div className="bookCard">
          <h3>Title: {eachBook.title}</h3>
          <p><b>Author:</b> {eachBook.author}</p>
          <p><b>Summary:</b> {eachBook.summary}</p>
          <p><b>Genre:</b> {eachBook.genre}</p>
          <img src={eachBook.image} alt={eachBook.title}/>
        
    </div>
  );
}

export default BookListCard
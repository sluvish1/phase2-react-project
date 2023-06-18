import React from "react";
import { useState } from "react";
/*
this componet will let the user enter a book theyve read along with the author and a summary
and display it on to the BooksList page 
 */

function BookForm() {

  //set the form to be empty
  const [bookFormData, setBookFormData] = useState({
    author: "",
    title: "",
    summary: "",
    genre: "",
  });
//listens to what the user has entered in the input and use the spread operator to make a copy of the empty form then sets the copy of bookFormData to equal the newly entered data
  function handelInputChange(e) {
    //console.log(e)
    setBookFormData({...bookFormData, [e.target.name]: e.target.value})
  }

//submits the data the user has entered
  function handelBookSubmit(e) {
    e.preventDefault();
    //the users input stored in a object
    const newBook = {
      author: bookFormData.author,
      title: bookFormData.title,
      summary: bookFormData.summary,
      genre: bookFormData.genre
    }

//this is taking the data entered and making a Post to the db.json
    fetch(" http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    //this will set the form back to empty once the user hits submit
    setBookFormData({
      author: "",
      title: "",
      summary: "",
      genre: ""
    });
  }
 

  return (
    <div className="newbookform">
      <form className="NewBook" onSubmit={handelBookSubmit}>
        <label>
          Book Review:
          <input
            type="text"
            placeholder=" Enter Book Author"
            onChange={handelInputChange}
            name="author"
            value={bookFormData.author}
            required
          />
          
          <input
            type="text"
            placeholder=" Enter Book Title"
            onChange={handelInputChange}
            name="title"
            value={bookFormData.title}
            required
          />
          
          <textarea
            placeholder="Summury Of Book"
            onChange={handelInputChange}
            name="summary"
            value={bookFormData.summary}
            required
          />
          
          <input type="text"
            placeholder=" Enter Book Genre"
            onChange={handelInputChange}
            name="genre"
            value={bookFormData.genre}
            required
          />
        </label>
        <button type="submit">Submit Book</button>
      </form>
    </div>
  );
}

export default BookForm;

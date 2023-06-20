import React from "react";
import { useState } from "react";
/*
this componet will let the user enter a book theyve read along with the author and a summary
and display it on to the BooksList page 

1.How do i make a img input that allows users to add a picture of the book to the form?
2.should i useState in the App ill need this data in all of the files
-yes useState in app

3.is my db.json set up correctly?

 */

function BookForm() {

  //set the value of the form to be empty
  const [bookFormData, setBookFormData] = useState({
    author: "",
    title: "",
    summary: "",
    genre: "",
    image: ""
  });
//listens to what the user has entered in the input and use the spread operator to make a copy of the empty form then sets the copy of bookFormData to equal the newly entered data
  function handelInputChange(e) {
    //console.log(e)
    e.preventDefault()
    setBookFormData({ ...bookFormData, [e.target.name]: e.target.value })
    //console.log(e)
  }

//submits the data the user has entered
  function handelBookSubmit(e) {
    e.preventDefault();
    //the users input stored in a object
    const newBook = {
      author: bookFormData.author,
      title: bookFormData.title,
      summary: bookFormData.summary,
      genre: bookFormData.genre,
      image: bookFormData.image
    }

//this is taking the data/object entered and making a Post to the db.json
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
      genre: "",
      image:""
    });
  }
 
  return (
    <form onSubmit={handelBookSubmit}>
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
        <input
          type="text"
          placeholder=" Enter Book Genre"
          onChange={handelInputChange}
          name="genre"
          value={bookFormData.genre}
          required
        />
        <input
          type="url"
          name="image"
          value={bookFormData.image}
          placeholder="Enter Image URL"
          onChange={handelInputChange}
          required/>
      </label>
      <button type="submit">Submit Book</button>
    </form>
  );
}

export default BookForm;

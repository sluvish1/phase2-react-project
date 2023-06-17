import React from "react";
/*
this componet will let the user enter a book theyve read along with the author and a summary
and display it on to the BooksList page 
 */

function BookForm() {

  function handelBookSubmit(e) {
     e.preventDefault();
  
}

  return (
    <form className="NewBook" onSubmit={handelBookSubmit}>
      <label>
        Book Review:
        <input type="text" placeholder=" Enter Book Author"></input>
        <input type="text" placeholder=" Enter Book Title"></input>
        <input type="test" placeholder=" Enter Book Summury"></input>
        <input type="test" placeholder=" Enter Book Genre"></input> 
      </label>
      <button type="submit">Submit Book</button>
    </form>
  );
}

export default BookForm;

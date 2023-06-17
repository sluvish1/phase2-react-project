import React from "react";


function HomePage() {



  return (
      <form className="NewBook">
        <label>
           Book Review: 
          <input type="text" placeholder=" Enter Book Author"></input>
          <input type="text" placeholder=" Enter Book Title"></input>
          <input type="summury" placeholder=" Enter Book Summury"></input>
         </label>
              
        <label>
          Book Category:
          <select name=" book category">
            <option value="Fantasy">Fantasy</option>
            <option value="Anime">Anime</option>
            <option value="Drama">Drama</option>
            <option value="Triller">Triller</option>
          </select>
        </label>
        <button type="submit">Submit Book</button>
      </form>
  );
}

export default HomePage;

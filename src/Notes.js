import React from "react";

/* this is a strech goal and it may or may not be reached right now
 */

function Notes() {

    function handelNoteEntered(e) {
        return (
            <div>

            </div>
        )
    }

    function handelNoteAdded() {
        return (
            <div>
                
        </div>
    )
    }
    
    function handelNoteDelete() {
        return (
            <div>

            </div>
        )
    }


    return (
        <div className="readingNotes">
            <form>
                <input onChange={handelNoteEntered}/>
                <button onClick={handelNoteAdded}>Add Note</button>
                <button onClick={handelNoteDelete}>Delete Note</button>
            </form>

        </div>
    )
}

export default Notes
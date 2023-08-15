import AddNote from "../Component/AddNote/AddNote";
import ListNote from "../Component/ListNote/ListNote";
import StateNote from "../Component/StateNote/StateNote";
import SortNotes from "../Component/SortNotes/SortNotes";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [sortValue, setSortValue] = useState("newest");

  const addNoteHandler = (note) => {
    const newNote = {
      id: new Date().getTime(),
      title: note.title,
      text: note.text,
      date: new Date().toLocaleString(),
      Completed: false,
    };
    setNotes([...notes, newNote]);
  };
  const checkHandler = (id) => {
    const index = notes.findIndex((note) => note.id == id);
    const selectedNote = { ...notes[index] };
    selectedNote.Completed = !selectedNote.Completed;
    const newNotes = [...notes];
    newNotes[index] = selectedNote;
    setNotes(newNotes);
  };
  const deleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };
  const sortHandler = (value) => {
    console.log(value);
  };
 
  return (
    <div className="app">
      <div className="header-app">
        <div className="header-app-title">
          <h1>My Notes</h1>
          <span>({notes.length})</span>
        </div>
        <SortNotes
          sortValue={sortValue}
          onSort={(e) => setSortValue(e.target.value)}
        />
      </div>
      <div className="body-app">
        <div className="body-app_addNote">
          <AddNote addNoteHandler={addNoteHandler} />
        </div>
        <div className="body-app_listNote">
          <StateNote notes={notes} />
          <ListNote
            notes={notes}
            sortValue={sortValue}
            checkHandler={checkHandler}
            deleteHandler={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

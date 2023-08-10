import { useState } from "react";
import style from "./AddNote.module.css";
const AddNote = ({ addNoteHandler }) => {
  const [note, setNote] = useState({ title: "", text: "" });

  const changeTitle = (e) => {
    setNote({ ...note, title: e.target.value });
  };
  const changeText = (e) => {
    setNote({ ...note, text: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addNoteHandler(note);
    setNote({ title: "", text: "" });
  };
  return (
    <div className={style.addNote}>
      <form className={style.addNote_inner} onSubmit={submitHandler}>
        <h2>Add New Note</h2>
        <input
          type="text"
          placeholder="note title ..."
          value={note.title}
          onChange={changeTitle}
        />
        <input
          type="text"
          placeholder="note discription ..."
          value={note.text}
          onChange={changeText}
        />
        <button>Add New Note</button>
      </form>
    </div>
  );
};

export default AddNote;

import style from "./AddNote.module.css";
const AddNote = (AddNote) => {
  return (
    <div className={style.addNote}>
      <div className={style.addNote_inner}>
        <h2>Add New Note</h2>
        <input type="text" placeholder="note title ..." />
        <input type="text" placeholder="note discription ..." />
        <button>Add New Note</button>
      </div>
    </div>
  );
};

export default AddNote;

import Note from "../Note/Note";
const ListNote = ({ notes, checkHandler, deleteHandler }) => {
  {
    // console.log(notes);
  }
  return (
    <div>
      {notes.map((note) => {
        return (
          <Note
            note={note}
            key={note.id}
            checkHandler={() => checkHandler(note.id)}
            onDelete={() => deleteHandler(note.id)}
          />
        );
      })}
    </div>
  );
};

export default ListNote;

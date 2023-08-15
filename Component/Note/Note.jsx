import style from "./Note.module.css";
import { FaTrashCan } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
const Note = ({ note, checkHandler, onDelete }) => {
  return (
    <div className={style.note}>
      <div className={style.note_body}>
        <div className={style.note_title}>
          <h2>{note.title}</h2>
          <p>{note.text}</p>
        </div>
        <div className={style.note_option}>
          <span className={style.note_trash} onClick={() => onDelete(note.id)}>
            <FaTrashCan />
          </span>
          <span
            className={style.note_check}
            onClick={() => checkHandler(note.id)}
          >
            {note.Completed ? <FaCheck /> : ""}
          </span>
        </div>
      </div>

      <div>
        <span className={style.note_data}>{note.date}</span>
      </div>
    </div>
  );
};

export default Note;

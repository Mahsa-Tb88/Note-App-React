import style from "./StateNote.module.css";
const StateNote = ({ notes }) => {
  return (
    <div className={style.stateNote}>
      <div>
        <span>All</span>
        <span>{notes.length}</span>
      </div>
      <div>
        <span>Completed</span>
        <span>{notes.filter((n) => n.Completed).length}</span>
      </div>
      <div>
        <span>Uncompleted</span>
        <span>{notes.filter((n) => !(n.Completed)).length}</span>
      </div>
    </div>
  );
};

export default StateNote;

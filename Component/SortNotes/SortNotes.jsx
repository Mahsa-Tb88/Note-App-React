import style from "./SortNotes.module.css";
const SortNotes = () => {
  return (
    <div className={style.sortNote}>
      <select>
        <option>sort base on Completed</option>
        <option>sort base on newest</option>
        <option>sort base on oldest</option>
      </select>
    </div>
  );
};

export default SortNotes;

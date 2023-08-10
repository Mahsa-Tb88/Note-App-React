import { useState } from "react";
import style from "./SortNotes.module.css";
const SortNotes = ({ sortHandler }) => {
  const [value, setValue] = useState("sort base on newest");
  const onSort = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
    sortHandler(value);
  };
  return (
    <div className={style.sortNote}>
      <select onChange={onSort}>
        <option value="Completed">sort base on Completed</option>
        <option value="Uncompleted">sort base on Uncompleted</option>
        <option value="newest">sort base on newest</option>
        <option value="oldest">sort base on oldest</option>
      </select>
    </div>
  );
};

export default SortNotes;

import AddNote from "../Component/AddNote/AddNote";
import ListNote from "../Component/ListNote/ListNote";
import StateNote from "../Component/StateNote/StateNote";
import SortNotes from "../Component/SortNotes/SortNotes";
import "./App.css"
const App = () => {
  return (
    <div>
      <div className="header-app">
        <div className="header-app-title">
          <h1>My Notes</h1>
          <span>(3)</span>
        </div>
        <SortNotes />
      </div>
      <div>
        <AddNote />
        <div>
          <StateNote />
          <ListNote />
        </div>
      </div>
    </div>
  );
};

export default App;

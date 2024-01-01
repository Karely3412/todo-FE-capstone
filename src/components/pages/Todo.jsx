import { useState } from "react";

const Todo = () => {
  // const [checklistName, setChecklistName] = useState("");
  const [inputCheckListName, setInputCheckListName] = useState("");
  const [allCheckList, setAllCheckList] = useState([]);

  const addCheckList = () => {
    // inputCheckListName.append(setAllCheckList);
    setAllCheckList((prev) => [...prev, inputCheckListName]);
  };

  console.log(allCheckList);

  return (
    <div className="todo-container">
      <h1>Start Planning Your Day</h1>
      <div className="input-wrapper">
        <input
          placeholder="Create a New Checklist?"
          onChange={(e) => setInputCheckListName(e.target.value)}
          value={inputCheckListName}
        ></input>
        <button onClick={addCheckList}>Create</button>
      </div>

      <div className="mid-wrapper">
        <div className="view-checklist-wrapper">
          {allCheckList.map((data) => {
            return (
              <div className="indiv-checklist-wrapper">
                <h3>{data}</h3>
              </div>
            );
          })}
        </div>

        <div className="checklist-items-wrapper">
          <div className="indiv-checklist-wrapper">
            <h3>sample checklist name</h3>
          </div>

          <div className="indiv-item-wrapper">
            <ul>
              <li>
                <p>sample item</p>
              </li>
              <li>
                <p>sample item</p>
              </li>
              <li>
                <p>sample item</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

import { useState } from "react";

const Todo = () => {
  const [inputCheckListName, setInputCheckListName] = useState("");
  const [viewCheckList, setViewCheckList] = useState([]);
  const [openViewCheckList, setOpenViewCheckList] = useState([]);
  const [inputAddItem, setInputAddItem] = useState("");
  const [addItem, setAddItem] = useState([]);

  const addCheckList = () => {
    setViewCheckList((prev) => [...prev, inputCheckListName]);
  };

  const addItemOn = () => {
    setAddItem((prev) => [...prev, inputAddItem]);
  };

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
          {viewCheckList.map((data, key) => {
            return (
              <div key={key} className="checklist-wrapper">
                <ul>
                  <input type="checkbox" />
                  <button
                    onClick={() => {
                      setOpenViewCheckList(data);
                    }}
                  >
                    {data}
                  </button>
                </ul>
              </div>
            );
          })}

          <div className="completed-check-lists"></div>
        </div>

        <div className="checklist-items-wrapper">
          <div className="checklist-wrapper">
            <h3>{openViewCheckList}</h3>
          </div>

          <input
            placeholder="Enter an Item"
            onChange={(e) => setInputAddItem(e.target.value)}
            value={inputAddItem}
          ></input>

          <button onClick={addItemOn}>Add Item</button>
          {/* <button>Edit</button>You are awesome, have a great night! :)Thank you Hayden!!! You are amazing!!!  <3*/}

          {/* {mapping is next} */}
          <div className="item-wrapper">
            <ul>
              <li>
                <p>{addItem}</p>
              </li>
              <li>
                <p>sample item</p>
              </li>
            </ul>
          </div>

          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;

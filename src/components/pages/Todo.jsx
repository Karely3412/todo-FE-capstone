const Todo = () => {
  return (
    <div className="todo-container">
      <h1>Start Planning Your Day</h1>
      <div className="input-wrapper">
        <input placeholder="Create a Checklist?"></input>
      </div>

      <div className="mid-wrapper">
        <div className="view-checklist-wrapper">
          <div className="indiv-checklist-wrapper">
            <h3>sample name</h3>
          </div>

          <div className="indiv-checklist-wrapper">
            <h3>sample name</h3>
          </div>

          <div className="indiv-checklist-wrapper">
            <h3>sample name</h3>
          </div>
        </div>

        <div className="checklist-items-wrapper">
          <div className="indiv-checklist-wrapper">
            <h3>sample name</h3>
          </div>

          <div className="indiv-checklist-wrapper">
            <h3>sample name</h3>
          </div>

          <div className="indiv-checklist-wrapper">
            <h3>sample name</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

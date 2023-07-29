import { useState } from "react";

export function NewTodoForm({onSubmit} ) {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }
  return (
    // <div className="toDoParent">
       <form onSubmit={handleSubmit} className="new-item-form">
      <label htmlFor="item">Add a New Item</label>
      <div className="form-row">
        <input
        className="formInput"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
        <button className="btn"> Add</button>
      </div>
      
    </form>
    // </div>
   
  );
}

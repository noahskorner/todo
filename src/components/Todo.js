import React from "react";

const Todo = () => {
  return (
    <div className="todo">
      <li className="todo-item">Todo 1</li>
      <button className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
    </div>
  );
};

export default Todo;

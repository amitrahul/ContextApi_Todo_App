import { useState } from "react";

const Todo = ({ text, isFinished, deleteTodo, editTodo, finishTodo }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [todoText, setTodoText] = useState(text);
  return (
    <div>
      <input
        type="checkbox"
        checked={isFinished}
        onClick={() => finishTodo(isFinished)}
      />
      {(isEditting && (
        <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      )) || <span>{todoText}</span>}
      <button
        onClick={() => {
          setIsEditting((prevState) => !prevState);
          editTodo(todoText);
        }}
      >
        {(isEditting && "Save") || "Edit"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo;

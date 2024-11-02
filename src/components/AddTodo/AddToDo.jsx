import { useState } from "react";

/*  for 1st way */
// const AddToDo = ({ setTodos }) => {

/* For 2nd way */
const AddToDo = ({ addTodos }) => {
  const [todoText, setTodoText] = useState("");

  //   1st way to add the item in todoList
  //   const handleAddNewToDoItem = () => {
  //     const obj = {
  //       id: Math.floor(Math.random() * 100 + 1),
  //       text: todoText,
  //       isFinished: false,
  //     };
  //     setTodos((prev) => [...prev, obj]);
  //     setTodoText("");
  //   };

  //  2nd way
  const handleAddNewToDoItem = () => {
    const obj = {
      id: Math.floor(Math.random() * 100 + 1),
      text: todoText,
      isFinished: false,
    };
    addTodos(obj);
    setTodoText("");
  };
  return (
    <>
      <input
        placeholder="add your nextTodo......."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddNewToDoItem}>Submit</button>
    </>
  );
};

export default AddToDo;

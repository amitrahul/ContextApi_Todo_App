import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddTodo/AddToDo";
import TodoList from "./components/TodoList/TodoList";

const todoList = [
  {
    id: 1,
    text: "todo1",
    isFinished: true,
  },
  {
    id: 2,
    text: "todo2",
    isFinished: false,
  },
  {
    id: 3,
    text: "todo3",
    isFinished: false,
  },
  {
    id: 4,
    text: "todo4",
    isFinished: true,
  },
];

function App() {
  const [todos, setTodos] = useState(todoList);

  const handleAddTos = (obj) => {
    setTodos((prev) => [...prev, obj]);
  };
  return (
    <>
      {/* for 1st way add the todo item in tods. */}
      {/* <AddToDo setTodos={setTodos} /> */}
      {/* for 2nd way */}
      <AddToDo addTodos={handleAddTos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

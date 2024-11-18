import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddTodo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";

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

  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        {/* for 1st way add the todo item in tods. */}
        {/* <AddToDo setTodos={setTodos} /> */}
        {/* for 2nd way */}
        <AddToDo />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;

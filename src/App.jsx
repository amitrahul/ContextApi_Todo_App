import { useReducer } from "react";
import "./App.css";
import AddToDo from "./components/AddTodo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./reducers/ToDoReducer";

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
  const [todos, dispatch] = useReducer(TodoReducer, todoList);
  /**
   * here todos is a state variable.
   * dispatch is a function, which is used to trigger an action.
   * here action are just task, we need to trigger a task.
   *
   * dispatch is taking one argument that is action object. Here we need to pass
   * the object with type and payload property.
   */
  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
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

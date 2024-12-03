import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  function handleDeleteTodoItem(todoId) {
    // const updatedTodoList = todos.filter((todo) => todo?.id !== todoId);
    // setTodos(updatedTodoList);
    dispatch({
      type: "delete_todo",
      payload: {
        todoId: todoId,
        /**
         we can also write as
         todoId,
         beacuse here key and value pair is same.
        *  */
      },
    });
  }
  const onEditTodo = (todoId, newTodo) => {
    // const newTodoList = todos.map((todo) => {
    //   if (todo?.id === todoId) todo.text = newTodo;
    //   return todo;
    // });
    // setTodos(newTodoList);
    dispatch({
      type: "edit_todo",
      payload: {
        todoId: todoId,
        newTodo: newTodo,
      },
    });
  };

  const onFinishTodo = (id, doneState) => {
    // const newTodoList = todos.map((todo) => {
    //   if (todo?.id === id) todo.isFinished = state;
    //   return todo;
    // });
    // setTodos(newTodoList);
    dispatch({
      type: "finish_todo",
      payload: {
        id,
        doneState,
      },
    });
  };
  return (
    <>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo?.id}
            text={todo?.text}
            isFinished={todo?.isFinished}
            deleteTodo={() => handleDeleteTodoItem(todo?.id)}
            editTodo={(newTodo) => onEditTodo(todo?.id, newTodo)}
            finishTodo={(todoState) => onFinishTodo(todo?.id, todoState)}
          />
        ))}
    </>
  );
}

export default TodoList;

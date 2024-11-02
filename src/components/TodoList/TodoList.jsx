import Todo from "../Todo/Todo";

function TodoList({ todos, setTodos }) {
  function handleDeleteTodoItem(todoId) {
    const updatedTodoList = todos.filter((todo) => todo?.id !== todoId);
    setTodos(updatedTodoList);
  }
  return (
    <>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo?.id}
            text={todo?.text}
            isFinished={todo?.isFinished}
            deleteTodo={() => handleDeleteTodoItem(todo?.id)}
          />
        ))}
    </>
  );
}

export default TodoList;

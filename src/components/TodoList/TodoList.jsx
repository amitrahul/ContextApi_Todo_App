import Todo from "../Todo/Todo";

function TodoList({ todos, setTodos }) {
  function handleDeleteTodoItem(todoId) {
    const updatedTodoList = todos.filter((todo) => todo?.id !== todoId);
    setTodos(updatedTodoList);
  }
  const onEditTodo = (todoId, newTodo) => {
    const newTodoList = todos.map((todo) => {
      if (todo?.id === todoId) todo.text = newTodo;
      return todo;
    });
    setTodos(newTodoList);
  };

  const onFinishTodo = (id, state) => {
    const newTodoList = todos.map((todo) => {
      if (todo?.id === id) todo.isFinished = state;
      return todo;
    });
    setTodos(newTodoList);
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

const TodoReducer = (state, action) => {
  if (action.type === "add_todo") {
    console.log("add");
    const obj = {
      id: Math.floor(Math.random() * 100 + 1),
      text: action.payload.todoText,
      isFinished: false,
    };
    return [...state, obj];
  } else if (action.type === "edit_todo") {
    console.log("edit");
    const newTodoList = state.map((todo) => {
      if (todo?.id === action.payload.todoId)
        todo.text = action.payload.newTodo;
      return todo;
    });
    return newTodoList;
  } else if (action.type === "finish_todo") {
    console.log("finish");
    const newTodoList = state.map((todo) => {
      if (todo?.id === action.payload.id)
        todo.isFinished = action.payload.doneState;
      return todo;
    });
    return newTodoList;
  } else if (action.type === "delete_todo") {
    console.log("delete");
    const updatedTodoList = state.filter(
      (todo) => todo?.id !== action.payload.todoId
    );
    return updatedTodoList;
  }

  return state;
};

export default TodoReducer;

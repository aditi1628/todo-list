export const editItem = (index, list, setList) => {
  const todos = [...list];
  const editedTodo = prompt("Edit the todo");
  if (editedTodo !== null && editedTodo.trim() !== "") {
    let updatedTodos = [...todos];
    updatedTodos[index].value = editedTodo;
    setList(updatedTodos);
  }
};

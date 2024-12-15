import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";
const TodoList = ({ list, deleteItem, editItem, updateStatus }) => {
  return (
    <ListGroup>
      {list.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item}
          index={index}
          deleteItem={deleteItem}
          editItem={editItem}
          updateStatus={updateStatus}
        />
      ))}
    </ListGroup>
  );
};
export default TodoList;

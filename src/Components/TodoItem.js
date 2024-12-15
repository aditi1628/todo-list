import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import DropdownMenu from "./DropdownMenu";
const TodoItem = ({ item, index, deleteItem, editItem, updateStatus }) => {
  return (
    <div>
      <ListGroup.Item
        variant="dark"
        action
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {item.value}
        <span style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{ marginRight: "10px" }}
            variant="light"
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </Button>
          <Button
            style={{ marginRight: "10px" }}
            variant="light"
            onClick={() => editItem(index)}
          >
            Edit
          </Button>
          <DropdownMenu
            id={`dropdown-status-${index}`}
            title={item.status}
            onSelectStatus={(status) => updateStatus(index, status)}
          />
        </span>
      </ListGroup.Item>
    </div>
  );
};
export default TodoItem;

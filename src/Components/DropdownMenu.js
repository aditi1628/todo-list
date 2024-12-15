import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
const DropdownMenu = ({ id, title, onSelectStatus }) => {
  return (
    <DropdownButton
      id={id}
      title={title}
      variant="light"
      onSelect={onSelectStatus}
    >
      <Dropdown.Item eventKey="Done">Done</Dropdown.Item>
      <Dropdown.Item eventKey="In Progress">In Progress</Dropdown.Item>
      <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
    </DropdownButton>
  );
};
export default DropdownMenu;

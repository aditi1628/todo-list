import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
const InputField = ({ userInput, updateInput, addItem }) => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="add item..."
        size="lg"
        value={userInput}
        onChange={(e) => updateInput(e.target.value)}
        aria-label="add something"
        aria-describedby="basic-addon2"
      />
      <Button variant="dark" onClick={addItem} style={{ marginRight: "10px" }}>
        ADD
      </Button>
    </InputGroup>
  );
};
export default InputField;

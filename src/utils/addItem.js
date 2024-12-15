export const addItem = (userInput, list, setList, setUserInput) => {
  if (userInput !== "") {
    const newItem = {
      id: Math.random(),
      value: userInput,
      status: "Pending",
    };
    setList([...list, newItem]);
    setUserInput("");
  }
};

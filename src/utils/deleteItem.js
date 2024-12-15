export const deleteItem = (key, list, setList) => {
  const updatedList = list.filter((item) => item.id !== key);
  setList(updatedList);
};

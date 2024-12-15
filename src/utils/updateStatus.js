export const updateStatus = (index, status, list, setList) => {
  const updatedList = [...list];
  updatedList[index].status = status;
  setList(updatedList);
};

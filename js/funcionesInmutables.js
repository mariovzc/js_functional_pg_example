// funcion mutable
const addToList = (list, item, quantity) => {
  list.push({ item, quantity });
  return list;
};

/// 
const addTolistInmu = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list));
  newList.push({ item, quantity });
  return newList;
};

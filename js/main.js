function compose(...functions) {
  return function (data) {
    return functions.reduceRight(function(value, func){
      return func(value)
    }, data)
  }
}

let description = $description;
let carbs = $carbs;
let calories = $calories;
let protein = $protein;

let list = [];
// funcion declarativa
const attrsToString = (obj = {}) =>
  Object.keys(obj)
    .map((key) => `${key}="${obj[key]}"`)
    .join("");

function tagAttrs({tag, attrs}) {
  return function(content) {
    return `<${tag} ${attrsToString(attrs)}>${content}</${tag}>`;
  }
}


const tag = (t) =>  typeof t === 'string' ? tagAttrs({tag: t}) : tagAttrs(t);

const tableCell = tag('td');
const tableCells = items => items.map(tableCell).join('');

const tableRowTag = tag('tr');
// const tableRows = items => tableRowTag(tableCell(items))
const tableRows = items => compose(tableRowTag, tableCells)(items)

const trashIcon = tag({tag: "i", attrs: {
  class: "fas fa-trash-alt"
}})("")
const removeButton = (index) => tag({
  tag: "button",
  attrs: {
    class: "btn btn-outline-danger",
    onclick: `removeItem(${index})`
  }
})(trashIcon)

const inputsList = [description, calories, protein, carbs];
const className = "is-invalid";
inputsList.forEach((e) =>
  e.addEventListener("keypress", () => e.classList.remove(className))
);

// validamos imputs
const validateInputs = () => {
  description.value ? "" : description.classList.add(className);
  carbs.value ? "" : carbs.classList.add(className);
  calories.value ? "" : calories.classList.add(className);
  protein.value ? "" : protein.classList.add(className);

  if (description.value && calories.value && carbs.value && protein.value)
    add();
};

const add = () => {
  const newItem = {
    description: description.value,
    calories: parseFloat(calories.value),
    carbs: parseFloat(carbs.value),
    protein: parseFloat(protein.value),
  };

  list.push(newItem);
  cleanInputs();
  updateTotals();
  renderItems();
};

const updateTotals = () => {
  let calories = 0, carbs = 0, protein = 0;

  list.forEach(item => {
    calories += item.calories;
    carbs += item.carbs;
    protein += item.protein;
  })

  total_carbs.innerHTML = carbs;
  total_prot.innerHTML = protein;
  total_cals.innerHTML = calories;
}

const cleanInputs = () => inputsList.forEach((e) => (e.value = ""));


const renderItems = () => {
  // limpiamos el body
  const tbody = document.querySelector('tbody');
  const htmlItems = list.map((item, index) =>
    tableRows([
      item.description,
      item.calories,
      item.carbs,
      item.protein,
      removeButton(index),
    ])
  ).join("");
  tbody.innerHTML = htmlItems;
}

const removeItem = (index) => {
  list.splice(index, 1)
  updateTotals();
  renderItems();
}
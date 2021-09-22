const a = {
  value: 2,
};

const addOne = () => (a.value += 1);

const timesTwo = () => (a.value *= 2);

addOne();
timesTwo();

console.log(a.value);

///////////// funciones sin estado compartido

const b = { value: 2 };

const addOne = (obj) => Object.assign({}, obj, { value: obj.value + 1 });
const timesTow = (obj) => Object.assign({}, obj, { value: obj.value * 2 });
console.log(addOne(b));
console.log(timesTow(b));

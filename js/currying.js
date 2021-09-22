const buildSum = a => b => a + b;

const tag = t => content => `<${t}>${content}<${t}/>`

function sumThreeNNumbers(a,b,c) {
  return a  + b + c
}

console.log(sumThreeNNumbers(1,2,3))

function sumThreeNNumbers2(a) {
  return function(b) {
    return function (c) {
      return a + b +c;
    }
  }
}
console.log(sumThreeNNumbers2(1)(2)(3))




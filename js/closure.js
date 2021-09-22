function buildSum(a) {
  return function(b) {
    return a + b;
  }
}

const buildSum2 = a => b => a + b;
const addfive = buildSum2(5);


console.log(addfive(5)); // 10

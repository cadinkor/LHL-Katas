const conditionalSum = function(values, condition) {
  if (condition === "even"){
    return values.filter(x => x % 2 === 0).reduce((a,b)=> a+b, 0)
  } else if (condition === "odd"){
    return values.filter(x => x % 2 === 1).reduce((a,b)=> a+b, 0)
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
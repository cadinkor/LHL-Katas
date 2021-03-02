const sumLargestNumbers = function(data) {
  
  let secondlargest = data.sort(function(a,b){return b-a})[1]; 
  let largest = data.sort(function(a,b){return b-a})[0]; 
  // let largest = Math.max(...data)
  return secondlargest + largest  

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
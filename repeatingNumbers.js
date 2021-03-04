const repeatNumbers = (arr) => {
  let num
  let times
  let string = [];

  arr.forEach(element => {
    num = (element[0]).toString();
    times = element[1];
  
    string.push(num.repeat(times));
  });
  string = string.toString();
  
  return string.replace(/,/g, ', ');
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
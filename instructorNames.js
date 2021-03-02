const instructorWithLongestName = function(instructors) {

  let biggestName = instructors[0]['name']; 
  let bigNameIndex = 0; 

  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i]['name'].length;

    if (nameLength > biggestName.length) {
      biggestName = instructors[i]['name'];
      bigNameIndex = i; 
    }
  }
  return instructors[bigNameIndex]; 
}

//or 

// const instructorWithLongestName = function(instructors) {
//   let sorted = instructors.sort(function(a, b) {

//     return b.name.length - a.name.length;
// });
//   return sorted[0];
// };

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
const urlEncode = function(text) {
  let arr = text.split('');
  if(arr[0] === ' '){
	arr.splice(0,1);
  }
  return arr.join('').replace(/ /gi, "%20")
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
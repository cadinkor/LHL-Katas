const talkingCalendar = function(date) {
  
  let year = date.slice(0, 4);
  let month = date.slice(5, 7)-1;
  let day = date.slice(8);

  let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  switch(day){
    case 1:
    case 21: 
    case 31:
      suffix = 'st';
      break;
    case 2:
    case 22:
      suffix = 'nd';
      break;
    case 3:
    case 23:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }

  let dateString = monthName[month] + " " + day +  suffix + ", " + year
  
  console.log(dateString)
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
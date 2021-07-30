let date = new Date();
console.log(date);
console.log('year'+date.getFullYear());
console.log("Date"+date.getMonth());
console.log("Day"+date.getDay());
console.log("Date&Time:"+date.toLocaleTimeString());
console.log("Full Date:"+date.toLocaleDateString());
let date2= new Date('2015-03-23');
console.log(date2.toLocaleDateString());
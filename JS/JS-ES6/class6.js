const letters = new Set();
letters.add('a');
letters.add('b');
letters.add('s');
letters.add('t');
letters.add('h');
console.log('length '+letters.size);
let isExist = letters.has('a');
console.log(isExist);
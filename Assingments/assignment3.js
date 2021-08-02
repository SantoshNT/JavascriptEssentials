// Challenge 02 - Camel-to-Title
// Convert a given sentence from camel case to title case. Create a function which evaluates a given sentence argument in camel case and converts it to title case. 
// e.g. productDetails to product-details 

let separate = word => {
  let arrWord = word.split('')
  let space = []
  for(let char of arrWord) {
    if(char.startsWith(char.toUpperCase())) {
      char = ` ${char}`
    } 
    else {
      char = `${char.toLowerCase()}`
    }
    space.push(char)
 }
  return space.join('')
}

const camelCase = "strength isLife WeaknessIsDeath"
const titleCase = text => {
//   Insert function
  const textArr = text.split(' ')
  const camelCased = []
  for(let word of textArr) {
    word = separate(word).trimStart(1)
    word = word[0].toUpperCase() + word.slice(1)
    camelCased.push(word)
  }
  return camelCased.join(' ')
}
console.log(titleCase(camelCase))
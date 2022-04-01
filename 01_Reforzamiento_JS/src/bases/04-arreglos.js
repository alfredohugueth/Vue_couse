

const array = [1,2,3,4,5];

console.log(array[1])

const array2 = [ ...array ]; // Using spred


array2.push(6)

const array3 = array2.map( el => el * 2)



console.log(array)
console.log(array2)
console.log(array3)

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
//Predict the output
// console.log(randomCar)
// [tesla]
// console.log(otherRandomCar)
// ['mercedes']

// ---------------------------------
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
//Predict the output
// console.log(otherName);
// (otherName)[,]
// output is Elon

// ---------------------------------------------

// const person = {
    // name: 'Phil Smith',
    // age: 47,
    // height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
//Predict the output
// console.log(password);
// UPDATE IT CAME BACK AS 12345 and undefined
// no password input so this should come back as undefined 
// console.log(hashedPassword);

// ---------------------------------------------------------

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
// 2
const [,,,second] = numbers;
// 6
const [,,,,,,,,third] = numbers;
// 2
//Predict the output
console.log(first == second);
// false
console.log(first == third);
// true

// -------------------------------------------------

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
// it will be everything inside the lastTest const
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// UPDATE IS value
//  key: 'value',
// secondKey: [1, 5, 1, 8, 3, 3]
console.log(secondKey);
// secondKey: [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
// secondKey: [1]
console.log(willThisWork);
// // secondKey: [1, 5, 1, 8, 3, 3]
// UPDATE [5] since there was a comma in the up







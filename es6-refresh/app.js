// CONST & LET
var name = 'John'; // global scoping
const age = 12; // cannot re-assign value, but can maipulate the child content which are already assigned
let bdayMonth = 'March'; // re-assignment allowed

// ARROW FUNCTIONS
function sayHello(){
  console.log('Hello');
}
sayHello();

const sayHi = name => console.log('Hi ' + name);
sayHi('Brad'); // one line arrow funct

const sayYo = (name, isExcited) => {
  let response = 'Yo ' + name;
  if (isExcited){
    response += '!';
  }
  console.log(response);
  return response;
};
sayYo('Johny', true);


// FOR EACH
const fruits = ['Apples', 'Oranges', 'Grapes', 'Bananas'];

fruits.forEach((fruit,index) => {
  console.log(fruit)
});


// MAP
const singleFruit = fruits.map((fruit) => fruit.slice(0,-1));
singleFruit.forEach((fruit,index) => console.log(fruit)); // strips the s of the end of each fruit keyword

// Maps are used in React to loop through lists.


// FILTER
const people = [
  {id: 1, name: 'Jim'},
  {id: 2, name: 'Janice'},
  {id: 3, name: 'Jordan'},
];

const pplFiltered = people.filter(person => person.id !== 2);
console.log(pplFiltered);

// SPREAD
const arr = [1,2,3];
const arr2 = [...arr, 4]; // spread operator
console.log(arr2); // Adds 4: 1,2,3,4

const pet = {
  type: 'Dog',
  age: 5,
};

const newPet = {
  ...pet,
  name: 'Buster'
};

console.log(newPet);

// DESTRUCTURING


// CLASSES


// SUBCLASSES


// MODULES

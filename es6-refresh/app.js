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
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr2); // Adds 4: 1,2,3,4
console.log(arr3);

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
const profile = {
  user: 'John Doe',
  address: {
    street:'40 Main St',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};

const {user, address, hobbies} = profile;
const {street} = profile.address;

console.log(user, address.city, hobbies[0]);

// Important in react because you have a lot of destructuring, you hav e state and you need to access/pull out the properties from the state


// CLASSES
class Person {
  // properties of a class
  constructor(name, age) { // properties need a constructor (a special type of method)
    console.log('New Person!');
    this.name = name;
    this.age = age;
  }

  // methods of a class
  greet(){
    return `Hello, my name is ${this.name}, and I am ${this.age}`;
  }
}

const person1 = new Person('John', 33);
const person2 = new Person('Jim', 23);

console.log(person1.age);
console.log(person1.greet());

// A react component class is just an es6 class

/*
  SUBCLASSES
  This is relevant to react because in React. You want subclasses where you want to extend another class. Specifically so, you need to extend the core React component class. It includes a lot of methods we call life cycle methods.
*/
class Customer extends Person {
  constructor(name,age,balance){
    // to inherit its properties you must use 'super' from within the constructor. It takes it from the extension - Person
    super(name,age);
    this.balance = balance;
  }

  owes(){
    return `${this.name} owes you $${this.balance}`
  }
}

const customer1 = new Customer('Kevvy', 24, 200);
console.log(customer1.name, customer1.balance);
console.log(customer1.owes());

/*
 MODULES
 Something you deal with a lot in react and any framework.Why? because you want to build a component, your not putting everything in one big js file. You want to important them for one app and export for another etc.

 React uses babel and webpack (a module bundler), even with the React CLI, command line tool.

 The following will be for demonstration only

 //file 1 (file1.js)
 export const name = 'Jeff';
 export const nums = [1,2,3];
 export default Person;

 //file 2 (file2.js)
 import { name } from './file1';
 import Person from './file1'; // note no need for curly braces since exported from 'DEFAULT'



*/

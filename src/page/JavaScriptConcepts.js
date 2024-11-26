// import React, { useState, useEffect } from 'react';

// function JavaScriptConcepts() {
//   // 1. JS Arrays - Intro and Loops
//   const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  
  
//   // Loop through the array using forEach
//   const fruitList = []; 
//   fruits.forEach((fruit) => {
//     fruitList.push(<li>{fruit}</li>);
//   });

//   // 2. JS Arrays - Add/Remove Items
//   const [fruitArray, setFruitArray] = useState(fruits);
  
//   const addFruit = (fruit) => {
//     setFruitArray((prev) => [...prev, fruit]); // Add item
//   };

//   const removeFruit = (fruit) => {
//     setFruitArray((prev) => prev.filter((item) => item !== fruit)); // Remove item
//   };

//   // 3. JS Arrays - Changing Data
//   const changeFruitName = (index, newName) => {
//     setFruitArray((prev) => prev.map((item, idx) => (idx === index ? newName : item)));
//   };

//   // 4. JS Array Methods (map, filter, find, some, slice, forEach, indexOf, reduce)
//   const arrayOperations = {
//     map: fruitArray.map((fruit) => fruit.toUpperCase()),
//     filter: fruitArray.filter((fruit) => fruit.startsWith('M')), // Filtering fruits starting with "M"
//     find: fruitArray.find((fruit) => fruit === 'Banana'), // Finding a specific fruit
//     some: fruitArray.some((fruit) => fruit === 'Mango'), // Checking if any fruit is "Mango"
//     slice: fruitArray.slice(1, 3), // Slicing fruits from index 1 to 3
//     indexOf: fruitArray.indexOf('Banana'), // Getting the index of "Banana"
//     reduce: fruitArray.reduce((acc, fruit) => acc + fruit.length, 0) // Sum of lengths of fruit names
//   };

//   // 5. JSON and Objects
//   const person = {
//     name: 'John Doe',
//     age: 30,
//     address: {
//       street: '123 Main St',
//       city: 'Cityville'
//     }
//   };
  
//   const jsonString = JSON.stringify(person); // Converting object to JSON string
//   const parsedObject = JSON.parse(jsonString); // Converting JSON string back to object
  
//   // 6. OOPS and its principles: Encapsulation, Inheritance, Polymorphism, Abstraction
//   class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//     speak() {
//       console.log(`${this.name} makes a sound.`);
//     }
//   }

//   class Dog extends Animal {
//     constructor(name, breed) {
//       super(name);
//       this.breed = breed;
//     }
//     speak() {
//       console.log(`${this.name} barks!`);
//     }
//   }

//   const dog = new Dog('Rex', 'German Shepherd');

//   // 7. JS - var, let, constant
//   let counter = 0; // Block scoped
//   const pi = 3.14; // Constant value
//   var oldWay = 'I am a global variable'; // Function scoped
  
//   // 8. JS: Hoisting
//   // Hoisting of function and variable declarations
//   console.log(hoistedVar); // undefined (hoisted)
//   var hoistedVar = 'I am hoisted!';

//   // 9. JS Event Loop
//   const eventLoopExample = () => {
//     console.log('Start');

//     setTimeout(() => {
//       console.log('Timeout executed');
//     }, 0);

//     console.log('End');
//   };

//   // 10. JS - Copy by Value and Copy by Reference
//   let num1 = 10;
//   let num2 = num1; // Copy by value
//   num2 = 20; // num1 remains 10

//   let obj1 = { name: 'John' };
//   let obj2 = obj1; // Copy by reference
//   obj2.name = 'Jane'; // obj1 also gets updated

//   // 11. JS - IIFE (Immediately Invoked Function Expression)
//   (function () {
//     console.log('This is an IIFE!');
//   })();

//   // 12. JS - Function Call Stack
//   const functionCallStackExample = () => {
//     firstFunction();
    
//     function firstFunction() {
//       console.log('In first function');
//       secondFunction();
//     }

//     function secondFunction() {
//       console.log('In second function');
//     }
//   };

//   // 13. JS - Async Programming (setTimeout and setInterval)
//   const [message, setMessage] = useState('Hello');
  
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setMessage('This is an async operation!');
//     }, 2000); // Async with setTimeout
    
//     const interval = setInterval(() => {
//       console.log('Interval running');
//     }, 1000); // Async with setInterval

//     // Cleanup intervals when component unmounts
//     return () => {
//       clearTimeout(timer);
//       clearInterval(interval);
//     };
//   }, []);

//   // 14. JS - Asynchronous Function Callbacks
//   const fetchData = (callback) => {
//     setTimeout(() => {
//       callback('Fetched Data');
//     }, 1000);
//   };

//   const handleData = (data) => {
//     console.log(data); // "Fetched Data"
//   };

//   fetchData(handleData);

//   // 15. JS - Async/Await Syntax
//   const asyncFunction = async () => {
//     const data = await new Promise((resolve) => {
//       setTimeout(() => resolve('Async/Await example!'), 2000);
//     });
//     console.log(data);
//   };

//   // Rendering JSX
//   return (
//     <div>
//       <h1>JavaScript Concepts in React</h1>

//       <h2>Array Operations (map, filter, etc.)</h2>
//       <ul>
//         {fruitList}
//       </ul>

//       <h3>Modified Fruit List (Map Example)</h3>
//       <ul>
//         {arrayOperations.map.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>

//       <button onClick={() => addFruit('Pineapple')}>Add Pineapple</button>
//       <button onClick={() => removeFruit('Banana')}>Remove Banana</button>

//       <h3>Person Object (JSON)</h3>
//       <pre>{JSON.stringify(parsedObject, null, 2)}</pre>

//       <h3>Dog Example (OOPS)</h3>
//       <p>{dog.speak()}</p>

//       <h3>Async Example</h3>
//       <p>{message}</p>

//       <h3>Function Call Stack</h3>
//       <button onClick={functionCallStackExample}>Run Function Call Stack Example</button>

//       <h3>Async/Await Example</h3>
//       <button onClick={asyncFunction}>Run Async/Await</button>

//       <h3>Event Loop Example</h3>
//       <button onClick={eventLoopExample}>Run Event Loop Example</button>
//     </div>
//   );
// }

// export default JavaScriptConcepts;

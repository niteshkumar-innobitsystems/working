import React, { useState } from 'react';
import Style from '../css/home.module.css';

// Truck class (can be separated in another file if needed)
class Truck {
  constructor(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
    let speed = 0;
    let weight = 0;

    this.getSpeed = () => speed;

    this.accelerate = (speedup) => {
      speed += speedup;
      console.log(`Accelerating... Speed is now: ${speed}`);
    };

    this.loaded = (moreweight) => {
      weight += moreweight;
      console.log(`Loading Weight... weight is now: ${weight}`);
    };

    this.unloaded = (lessweight) => {
      if (weight - lessweight >= 0) {
        console.log(`Unloading the Truck.... Truck weight is now: ${weight -= lessweight}`);
      } else {
        console.log("Unloading the Truck.... Truck is empty");
      }
    };

    this.brake = (slow) => {
      if (speed - slow >= 0) {
        console.log(`Slowing the Truck.... Truck speed is now: ${speed -= slow}`);
      } else {
        console.log("Stopping the Truck.... Truck is stopped");
      }
    };
  }
}

function Home() {
  // State for person data
  const [person, setPerson] = useState({ name: "Nitesh", age: 19 });

  // Static menu items
  const menus = ['Home', 'About', 'PMS', 'HRMS'];

  // Event handler for button click
  const handleClick = () => {
    console.log('test'+ this);
  };

  // Example: Creating a truck instance and performing operations
  const myTruck1 = new Truck("new1", "Tata", 2019);
  console.log(myTruck1);

  myTruck1.accelerate(20);
  myTruck1.loaded(100);
  myTruck1.unloaded(20);
  myTruck1.unloaded(80);
  console.log(myTruck1.getSpeed());
  myTruck1.brake(10);
  myTruck1.brake(10);





  //------------------------------------------this

function greet(){
  console.log(this.name);
}

const persons = {name:"nitesh",phone:1234567890};
console.log("-----------------------------------------------------");
greet.call(persons);
greet.apply(persons);

const test=greet.bind(person);
test();



function greets(greeting, punctuation) {
  console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob11' };

greets.call(person1, ['Hello', '!']); // "Hello, my name is Alice!"
greets.apply(person2, ['Hi', '.']);   


//-==============-==================================-------------========================

const p1={name:'Nitesh',phone:1234567890};
const p2={name:'User',phone:1234567890};

const namecontact= function (input1, input2){
  console.log(this.name + " " + "Contact At : "+ this.phone + " and other: "+ input1 + " |  " + input2);
}


namecontact.call(p1,"yes","no");
namecontact.apply(p2,["yes","no"]);

console.log("+++++++++++++++++++++++Bank+++++++++++++++++++++++++++++++");
class BankAccount { 
  constructor(owner, balance) { 
    this.owner = owner; 
    this._balance = balance; // Protected property 
  } 
 
  // Method to withdraw money, encapsulating the logic 
  withdraw(amount) { 
    if (amount > this._balance) { 
      console.log("Insufficient funds!"); 
    } else { 
      this._balance -= amount; 
      console.log(`Withdrawn ${amount}, new balance: ${this._balance}`); 
    } 
  } 
 
  // Method to deposit money, encapsulating the logic 
  deposit(amount) { 
    this._balance += amount; 
    console.log(`Deposited ${amount}, new balance: ${this._balance}`); 
  } 
 
  // Getter method to access the balance 
  getBalance() { 
    return this._balance; 
  } 
} 
 
const myAccount = new BankAccount('John', 500); 
myAccount.deposit(200); // Deposited 200, new balance: 700 
myAccount.withdraw(100); // Withdrawn 100, new balance: 600 
myAccount.balance=400;
myAccount._balance=700;
console.log(myAccount._balance);
myAccount.deposit(0); 

console.log("+++++++++++Set Timeout+++++++++++\n");

console.log("Start");

setTimeout(()=>{
console.log("after 0 sec");

},2);
console.log("Ending");



  return (
    <div className={Style.main}>
      <div className={Style.navbar}>
        <div className={Style.nabmenu_logo}></div>
        <div className={Style.nabmenu}>
          {menus.map((menu, index) => (
            <div className={Style.menutitle} key={index}>
              {menu}
            </div>
          ))}
          <div className={Style.username}>Welcome, {person.name}!</div>
        </div>
      </div>

      <div className={Style.mainBody}></div>
      <button onClick={handleClick}>Click Me</button>

      <p>This is the home component.</p>
    </div>
  );
}

export default Home;

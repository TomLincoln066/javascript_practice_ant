//check Live Server extension to see how the web goes.
//Object Literals - one time use object; not great when set up for multiple people
var Person = {firstName: "Will", lastName: "B", Age: 21, Location:"DC"};
console.log(Person);

//Function Constructors
function Guy(first = "default", last = "default", age = 0, location = "default"){
    this.fristName = first;
    this.lastName = last;
    this.Age = age;
    this.Location = location;
}

const defaultGuy = new Guy();
const Will  = new Guy("Will","Bass",24,"DC");
console.log(defaultGuy);
console.log(Will);

//Object.Create Method - take any existing type of object and clone it
const newPerson = Object.create(defaultGuy);
console.log(newPerson);

newPerson.firstName="new first name";
newPerson.lastName="new last name";
newPerson.Age=Will.Age;
newPerson.Location=Will.Location;
console.log(newPerson);

//Class
class Car {
    constructor(Make, Model){
        this.Make = Make;
        this.Model = Model;
    }
    intro(){
        console.log("Hi, I'm a " + this.Make + " of type " + this.Model);
    }
}


const newCar = new Car("Ford", "Focus");
console.log(newCar);
newCar.intro();


//Inheritance - super 
class Engine extends Car {
    constructor(Make, Model, Size){
        super(Make, Model);
        this.Size = Size;
    }
}

const specificCar = new Engine("Ford", "Mustang", "V8");
console.log(specificCar);

//Arrays
let Products = [
    {Name:"Laptop", Cost:1000},
    {Name:"Monitor", Cost:400},
    {Name:"Keyboard", Cost:100}

]

console.log(Products);

var sum = Products[0].Cost + Products[1].Cost + Products[2].Cost;
console.log(sum);

console.log(Products[0]);

let Salaries = [1000, 1500, 2000];
console.log(Salaries);

//Change the value of an Array Item
Salaries[2] = 1500;
console.log(Salaries);

//Add Item to end of Array
Salaries.push(500);
console.log(Salaries);

//Remove last element in Array  - pop
Salaries.pop();
console.log(Salaries); 

//Remove first element in Array - shift
Salaries.shift();
console.log(Salaries);

//add several elements into Array - push
Salaries.push(600,700,800,900,1000);
console.log(Salaries);

//Remove elements from the middle of an Array - splice
Salaries.splice(1,2);
console.log(Salaries);

// forloop access elements in an Array
function exampleName(){
    for (var i = 0; i<Salaries.length;i++){
        Salaries[i] += 1;

    }

}

exampleName();
console.log(Salaries);

// Iterate through all elements in Object - when you don't know how many elements are there in the Array
for (let element in Salaries){
    //Sample Code Here
}


//work with the background color change button

const myBtn = document.getElementById("bgColor");

// if click, function - second parameter will be triggered 
myBtn.addEventListener("click",()=> {
    document.body.style.backgroundColor = "Green";
});

const resetButton = document.getElementById("clearForm");
resetButton.addEventListener("click", ()=>{

    document.getElementById("Email").value = "";
    document.getElementById("Password").value = "";
    // document.getElementById("Email").innerText = "1221";
    // document.getElementById("Password").innerText = "12312";
    //        <input id = "clearForm" type="reset" value="Clear Form">
    //        <input id = "clearForm" type="button" value="Clear Form">


});










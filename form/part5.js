//object literals in Javascript
// let student = {
//     name : "lokesh",
//     age : 20,
//     gender : "male",
//     city: "nagpur"
// };
// console.log(student);

//another example
// const nagpur = {
//     latitude  : "21.1458° N",
//     longitude :"79.0882° E"
    
// };
// console.log(nagpur);

//another example
// const item = {
//     price : 99,
//     discount : 10,
//     color :["red","pink","yellow"],
//     place : "maumbai"
// };
// console.log(item);

//creating a post using objet literals
// const post = {
//     username : "@lokeshlikhar",
//     content : "This is my #FirstPost",
//     like : 150,
//     reposts : 5,
//     tags : ["@dushant","@pratik","@amandhattarwal","@hustlewithharman"]
// };
// console.log(post);

//two ways to access the key value of object;
// console.log(post["like"]);
// console.log(student.name);
// console.log(post.tags[0]);

//we can assign one key property of an object to an new variable and after that we can get that value 
// let prop = "reposts";
// console.log(post[prop]);
// console.log(post["reposts"]);

//js automatically convert objects keys values in string
// let obj = {
//     1: "nitin",
//     2: "bhimrao",
//     3: "sunita",
//     null: "kuch nhi",
//     like:  "one",
//     true: "yes its true"
// };
// console.log(obj["1"]);
// console.log(obj[1]); // we can access key when it is number or any javascript key word without "" also.

// console.log(obj[null]);
// console.log(obj["like"]);
// console.log(obj[true]);
// console.log(obj["true"]);

//objects of object
// const classInfo = {
//     aman : {
//         grades: "A",
//         city : "Delhi"
//     },
//     bhavesh : {
//         grades: "AB",
//         city : "Dubai"
//     },
//     shakya : {
//         grades: "A-",
//         city : "Chennai"
//     },
//     dushant : {
//         grades: "A+",
//         city : "Srinagar"
//     },
    
// };

//accessing the key values in objects of object
// console.log(classInfo.aman);
// console.log(classInfo.aman.grades);

//changing the values in objects of object
// classInfo.aman.grades = "B+";
// console.log(classInfo.aman.grades)


//array of objects
// const classinfo = [
//     {
//         name : "Aman",
//         grade : "A+",
//         city: "delhi"
//     },
//     {
//          name : "shradha",
//         grade : "AB+",
//         city: "Mumbai"
        
//     },
//     {
//          name : "Anurag",
//         grade : "B-",
//         city: "shegao"
        
//     }
//     ];
    
//accessing objects of array
// console.log(classinfo[0]);

// console.log(classinfo[1].name);

//updating values 
// classinfo[1].name = "Ishita";
// console.log(classinfo[1].name);

//adding new property
// classinfo[1].gender = "Female";
// console.log(classinfo[1]);

//generating RANDOM INTEGER
// let num  = Math.random();
// console.log(num);
// num = num * 10;
// num + 1;
// console.log(num);

//above all steps in one (that generate number between 1 - 10);
// console.log(Math.floor(Math.random() * 10));
//there is one problem in above that ..it will never generate 10 ..because Math.random() never generate 1. ..now it range is 0 - 10;


//now it range is 1-10;
// console.log(Math.floor(Math.random() * 10)+1);

//proper way
// let random  = Math.floor(Math.random() * 10)+1;
// console.log(random);

//generating 1 -100;
// let rdn = Math.floor(Math.random() * 100)+1;
// console.log(rdn);

//generating 1-15;
// let rdnn = Math.floor(Math.random() * 15)+1;
// console.log(rdnn);

//generating random number between 20-24;
// let rd = Math.floor(Math.random() * 5)+20;
// console.log(rd);


//generating random number between 21-25;
// let r = Math.floor(Math.random() * 5)+21;
// console.log(r);

//assignment question;

//Create a program that generates a random number representing a dice roll.[The numbershould be between 1 and 6 ].
// let dice = Math.floor(Math.random()*6) +1;
// console.log(dice);

// Create an object representing a car that stores the following properties for the car:name,model,color. Print the car’s name.
// const car = {
//     name : "Dhanno",
//     model : "BMW M5",
//     color : "Black"
// };
// console.log(car);
// console.log(car.name);


// Create an object Person with their name,age and city.Edit their city’s original value to change it to“ NewYork”.Add a new property country and set it to the United States.
// const person = {
//     name : "rohan",
//     age : 23,
//     city : "mumbai"
// };
// console.log(person);
// person.city = "NeyYork";
// person.country = "United States";
// console.log(person);

//practicing the object and math object in javascript

//1st question
// Create an object person with properties name, age, and city. Write code to:
// Print each property.
// Update the age property.
// Add a new property country with a value.

// let person = {
//     name: "Nikhil",
//     age : 20,
//     city : "Dubai"
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// person.age = 22;
// person.country = "UAE";

// console.log(person);

//2nd question
// Write an object literal for a car with properties like brand, model, and year.
// Write a function to display the car’s details in a sentence like "The car is a 2021 Toyota Corolla."
// let car = {
//     brand: "Toyota",
//     model : "Corolla",
//     year : 2021
// }
// console.log(`The car is a ${car.year} ${car.brand} ${car.model}`);

//3rd question
// Create an object student with properties name, age, and a nested object grades (having subjects as keys, like math, science, etc.).
// Write code to:
// Access and print the math grade.
// Update the science grade.

// let student = {
//     name : "Rohit",
//     age : 35,
//     grades : {
//         maths : 99,
//         science : 80,
//         geography : 98
//     }
// }
// console.log(student.grades.maths);
// student.grades.science = 88;
// console.log(student);


//4th question
// Create an array books with each item being an object with properties like title, author, and yearPublished.
// Write code to:
// Add a new book to the array.
// Find and print the book written by a specific author.
// List the titles of all books published before 2015.

// let arr = [
//     {
//         title : "How to win and Infleunce People",
//         author : "Author1",
//         yearPublished : 2020
        
//     },
//     {
//         title : "Atomic Habits",
//         author : "Author2",
//         yearPublished : 2021
//     },
//     {
//          title : "Deep Work",
//         author : "Author3",
//         yearPublished : 2023
//     }
//     ];
// let specAuthor  = "Author2";
// for(let i = 0;i<arr.length;i++){
//     if(arr[i].author == specAuthor){
//         console.log(arr[i].title);
//     }
// }

//5th question
// Write a function that takes a number and:
// Rounds it to the nearest integer using Math.round().
// Finds its square root using Math.sqrt().
// Returns the smallest integer greater than or equal to it using Math.ceil().

// let num = prompt("Enter the Number: ");
// num = parseFloat(num);

// console.log(Math.ceil(Math.sqrt(Math.round(num))));
// let round = Math.round(num);
// console.log(round);
// let sqrt = Math.sqrt(round);
// console.log(sqrt);
// let ceil = Math.ceil(sqrt);
// console.log(ceil);

//basic questions on object literals

//1st question
// Print the person's name.
// Print the person's city.

// let person = {
//     name: "Lokesh",
//     age: 21,
//     city: "Mumbai"
// };
// console.log(person.name);
// console.log(person.city);

//2nd question
// Using the same object from Question 1, update the age to 22 and print the updated object
// person.age = 22;
// console.log(person.age);

//3rd question
// Write a program to loop through the object and print each key-value pair.
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// for(let x in car){
    
//     console.log(`${x} : ${car[x]}`)
// };

//4th question
// Print the student's city.
// Print the student's pin code.

// let student = {
//     name: "Amit",
//     address: {
//         city: "Delhi",
//         pin: 110001
//     }
// };
// console.log(student.address.city);
// console.log(student.address.pin);

//5th question Array of Objects
// Print the name of each fruit using a loop.
// Print the color of each fruit using a loop.
// let fruits = [
//     { name: "Apple", color: "Red" },
//     { name: "Banana", color: "Yellow" },
//     { name: "Grapes", color: "Green" }
// ];
// // console.log(fruits[0]);
// for(let i =0;i<fruits.length;i++){
//     console.log(fruits[i].name);
// }
// for(let i = 0;i<fruits.length;i++){
//     console.log(fruits[i].color);
// }

//6th question
// Add a new property pages with the value 300, then print the updated object.
// let book = {
//     title: "JavaScript Basics",
//     author: "John Doe"
// };
// book.pages = 300;
// console.log(book.pages);

//7th question
//Count Objects in an Array
// let students = [
//     { name: "Lokesh", age: 21 },
//     { name: "Amit", age: 22 },
//     { name: "Sara", age: 20 }
// ];
// let count = 0;
// for(let i = 0;i<students.length;i++){
//     count = count+1
// };
// console.log(count);

//8th question
// Using the same array of students from Question 7, write a program to print the names of students whose ages are even.
// for(let i = 0;i<students.length;i++){
//     if(students[i].age % 2 === 0){
//         console.log(students[i].name);
//     }
// };

// 9th question
//Write a program to calculate the total marks by summing up all the values in the object.
// let marks = {
//     math: 85,
//     science: 90,
//     english: 78
// };

// function sum(){
//     let sum = 0;
//     for(let x in marks){
//         sum = sum + marks[x];

//     }
//     return sum;
// }
// console.log(sum());

//10th question
// Print the title of each book.
// Print the author of each book.

// let library = {
//     books: [
//         { title: "Book A", author: "Author A" },
//         { title: "Book B", author: "Author B" },
//         { title: "Book C", author: "Author C" }
//     ]
// };
// for(let i = 0;i<library.books.length;i++){
//     console.log(library.books[i].title);
//     console.log(library.books[i].author);

// }
// for (let book of library.books) {
//     console.log(book.title);  // Print the title of the book
//     console.log(book.author); // Print the author of the book
// }

//intermediate level questions on object literals
//1st question
//Write a function countProperties(obj) that takes an object as input and returns the total number of properties in it. Include properties from any nested objects as well.
// function countProperties(obj) {
//     let count = 0;

//     // Loop through all properties of the object
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {  // Ensure it's the object's own property
//             count++;  // Increment count for the current property

//             // Check if the property is an object and not null
//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 count += countProperties(obj[key]);  // Recursively count nested object properties
//             }
//         }
//     }

//     return count;  // Return the total count
// }

// // Example object
// let obj = {
//     name: "Lokesh",
//     age: 21,
//     address: {
//         city: "Mumbai",
//         pin: 400001
//     }
// };

// console.log(countProperties(obj)); // Output: 5

//2nd question

// Write a function to calculate the total score of all students.
// let students = [
//     { name: "Amit", score: 85 },
//     { name: "Sara", score: 92 },
//     { name: "John", score: 78 }
// ];
// function sumOf(obj){
//     let sum = 0;
//     for(let i = 0;i<students.length;i++){
//         sum = sum + students[i].score;
//     }
//     return sum
// }
// console.log(sumOf());

//3rd question
// Write a program to find all students who belong to "Delhi" and print their names.
// let students = [
//     {name:"Amit",city: "delhi"},
//     {name: "john",city : 'mumbai'},
//     {name : "sara",city: "delhi"}
// ];
// function city(){
//     for(let i = 0;i<students.length;i++){
//         if(students[i].city == "delhi"){
//             console.log(students[i].name);
//         }
//     }
// };
// city();

//4th question
//Write a program to filter out all items that are available and print their names.
// let inventory = [
//     { name: "Laptop", price: 50000, available: true },
//     { name: "Phone", price: 25000, available: false },
//     { name: "Tablet", price: 30000, available: true }
// ];
// function available(){
//     for(let i = 0;i<inventory.length;i++){
//         if(inventory[i].available === true){
//             console.log(inventory[i].name);
//         }
//     }
// }
// available();

//5th question
// Print the name of all employees.
// Print the department name of each employee.
// Calculate the total number of floors the employees' departments are located on.
// let company = {
//     name: "TechCorp",
//     employees: [
//         {
//             name: "Amit",
//             department: {
//                 name: "IT",
//                 floor: 2
//             }
//         },
//         {
//             name: "Sara",
//             department: {
//                 name: "HR",
//                 floor: 3
//             }
//         }
//     ]
// };

//3rd 
// function totalFloor(){
//     let total = 0;
//     for(let i= 0;i<company.employees.length;i++){
//         total = total + company.employees[i].department.floor;
//     }
//     return total;
// };
// console.log(totalFloor());
//1st
// function epmName(){
    
//         for(let i = 0;i<company.employees.length;i++){
//             console.log(company.employees[i].name);
//         }
    
// }
// epmName();

//2nd
// function dpName(){
    
//         for(let i = 0;i<company.employees.length;i++){
//             ;
//             console.log(`${company.employees[i].name} department is ${company.employees[i].department.name}`)
//         }
    
// }
// dpName();

//6th question
let products = [
    { name: "Laptop", price: 5 },
    { name: "Phone", price: 25 },
    { name: "tab", price: 3 },
    { name: "cover", price: 30 },
    { name: "coin", price:  20},
    { name: "keychain", price: 33},
    { name: "earphone", price: 13 },
    { name: "charger", price:11  },
];
function assending(products){
    for(let i = 0;i<products.length-1;i++){
        for(let j = 0;j<products.length-i-1;j++){
            if(products[j].price > products[j+1].price){
                let temp = products[j]
                products[j] = products[j+1];
                products[j+1] = temp;
            }
        }
    }return products;
}
console.log(assending(products));

// function as(products){
//     for(let i = 0;i<products.length-1;i++){
//         for(let j = 0;j<products.length-1;j++){
//             // if(products[j].price > products[j+1].price){
//             //     let temp = products[j];
//             //     products[j] = products[j+1];
//             //     products[j+1]= temp;
//             // }
//             console.log(1);
//         }
//     } //return products;
// }
// console.log(as(products));

//7th question
//Write a program to find and print the name of the oldest person.
let people = [
    { name: "Amit", age: 25 },
    { name: "Sara", age: 30 },
    { name: "John", age: 28 }
];
function peopleOld(){
    let old = people[0];
    for(let i = 1;i<people.length;i++){
        if(people[i].age > old.age){
            old = people[i];
        }
    }return old.name;
}
console.log(peopleOld());



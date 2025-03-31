const str1="hello word";
//capitalise function
function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}
console.log(capitalize(str1));

//reverse

const reverse=str=>str.split('').reverse().join('');
console.log(`reversed string: ${reverse(str1)}`);
//check if string is palindrome

function isPalindrome(str){
    if(str.split('').reverse().join('')===str){
        console.log(true,` i as a palindrome`);
    }
    else{
        console.log(false,` i as not palindrome`);
    }
}
isPalindrome(str1)

//counting number of words in the string

function wordCount(str){
    return str.trim().split(/\s+/).length;
}
console.log(`${str1} contains ${wordCount(str1)} words`);
// to snake case

function tosnakecase(str){
    return str.toLowerCase().replace(/\s+/g, '_');
}
console.log(`this is snake case:${tosnakecase(str1)}`);

// to camelCase
function toCamelCase(str){
    let words=str.split(/\s+/);
    let result=words[0].toLowerCase()+words.slice(1).map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join('');
    return result;
}
console.log(`${str1} is ${toCamelCase(str1)} into camelcase`);
// returns a longest word in the string

function longestWord(str){
   let words=str.split(/\s+/);
   let longest="";
words.forEach(word=>{
    if(word.length>longest.length){
        longest=word;
    }
});
return longest;
}
console.log(longestWord(str1));
//count number of time a specific letter appeared in the string

function countLetter(str, letter) {
    let result = str.split('').filter(char => char === letter).length;
    console.log(`Letter "${letter}" appears:${result}`);
}
countLetter(str1, "l");

//2. Array Transformations
function double(arr) {
    let result = arr.map(num => num * 2);
    return result;
}
console.log(double([1, 2, 3, 4]));
// filtering even numbers out and returning odd numbers
function filterEven(arr) {
    let result = arr.filter(num => num % 2 !== 0);
    console.log(`Odd Numbers:${result}`);
}
filterEven([1, 2, 3, 4, 5, 6]);
//sum of array elements
function sum(arr) {
    let result = arr.reduce((acc, num) => acc + num, 0);
    console.log("Sum of Array:", result);
}
sum([1, 2, 3, 4]);

// average
function average(arr) {
    let  total=arr.reduce((acc, num) => acc + num, 0);
    let calcAverage=total/arr.length;
    console.log(`Average:${calcAverage}`);
}
average([1, 2, 3, 4]);
// finding maximum number in the array
function findMax(arr) {
    let result = Math.max(...arr);
    console.log(`Max Number:${result}`);
}
findMax([10, 20, 5, 30]);
// minimum number in the array
function findMin(arr) {
    let result = Math.min(...arr);
    console.log(`Min Number:${result}`);
}
findMin([10, 20, 5, 30]);
// removing duplicate
function removeDuplicates(arr) {
    let result = [...new Set(arr)];
    console.log(`Array without duplicates:${result}`);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
//returns the index of a given value in an array (or -1 if not found)
function findIndex(arr, value) {
    let result = arr.indexOf(value);
    console.log(`Index of ${value}:`, result);
}
findIndex([10, 20, 30, 40], 30);

//3. Object Transformation
//
function fullName(person) {
    let result = `${person.firstName} ${person.lastName}`;
    console.log("Full Name:", result);
}
fullName({ firstName: "Aline", lastName: "Asiimwe" });
// checks if a person is 18 or older
function isAdult(person) {
    let result = person.age >= 18;
    console.log(`${person.firstName} is an adult:`, result);
}
isAdult({ firstName: "Aline", age: 20 });
//filters an array of person objects to keep only those who are at least minAge years old
function filterByAge(people, minAge) {
    let result = people.filter(person => person.age >= minAge);
    console.log(`People older than ${minAge}:`, result);
}
filterByAge([{ firstName: "Aline", age: 20 }, { firstName: "John", age: 16 }], 18);

// adding a new property to an array
function addProperty(obj, key, value) {
    obj[key] = value;
    console.log(`Updated Object:${obj}`);
}
addProperty({ name: "Aline" }, "age", 20);
//checks if an object has a specific property.
function hasProperty(obj, key) {
    let result = obj.hasOwnProperty(key);
    console.log(`Object has "${key}" property:${result}`);
}
hasProperty({ name: "Aline", age: 20 }, "age");
//returns the number of properties in an object
function countProperties(obj) {
    let result = Object.keys(obj).length;
    console.log(`Number of properties:${result}`);
}
countProperties({ name: "Aline", age: 20});
//4.Function Composition

function compose(...fns) {
    return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}

const reverseAndCapitalize = compose(capitalize, reverse);
console.log("Reverse and Capitalize:", reverseAndCapitalize(str1));

//filtering even numbers and return array of doubled even numbers

function filterEven(arr) {
    return arr.filter(num => num % 2 === 0); // Filters even numbers
}

function double(arr) {
    return arr.map(num => num * 2); // Doubles each number
}

function doubleEvens(arr) {
    let result = double(filterEven(arr));
    console.log("Doubled Evens:", result);
}

doubleEvens([1, 2, 3, 4, 5, 6]); // Outputs Doubled Evens: [4, 8, 12]

//maps over the array and adds a new property status, where status is "Pass" if the grade is above 50 and "Fail" otherwise

function transformStudents(students) {
    let result = students.map(student => ({ ...student, status: student.grade > 50 ? 'Pass' : 'Fail' }));
    console.log("Students with status:", result);
}
transformStudents([{ name: "Aline", grade: 60 }, { name: "John", grade: 40 },{name:"Afisa", grade:90}]); 

//sorts an array of objects by a given key (e.g., sorting people by age).
function sortObjects(arr, key) {
    let result = arr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    console.log(`Sorted by ${key}:`, result);
}
sortObjects([{ name: "Aline", age: 20 }, { name: "John", age: 16 }], "age");

//filtering y keyword
function filterByKeyword(products, category) {
    let result = products.filter(product => product.category === category);
    console.log(`Products in "${category}" category:`, result);
}
filterByKeyword([{ name: "Laptop", category: "Electronics" }, { name: "Shirt", category: "Clothing" }], "Electronics");
// simple cashing function
function cacheFunction(fn) {
    let cache = {};
    return (...args) => {
        let key = JSON.stringify(args);
        if (!(key in cache)) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

const cachedSum = cacheFunction(arr => arr.reduce((acc, num) => acc + num, 0));
console.log("Cached Sum:", cachedSum([1, 2, 3, 4]));
console.log("Cached Sum (again):", cachedSum([1, 2, 3, 4]));

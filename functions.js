function greet(name, lastName){
    result = "Hello"+ " " + name +  " " + lastName
    console.log(result);
}
greet("Anyone", "Second name");

function addOfTwo(numberOne, numberTwo){
    let result = numberOne + numberTwo
    return result
}
let summary = addOfTwo(2,4);
console.log(summary);

const people = ["John", "Ivan", "Alex"];
people.pop();
console.log(people)
people.push("Dude")
console.log(people)
people.shift()
console.log(people)
people.unshift("new Dude")
console.log(people)
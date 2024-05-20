function add(a, b) {
    return a + b;
}
function greet(name) {
    return "salutation " + name;
}
var unknownVariable;
console.log(typeof (unknownVariable));
unknownVariable = greet("Steph");
//let a: string = unknownVariable as string;
console.log(typeof (unknownVariable), unknownVariable);

var message = "hello PatateDouce";
var nbr = 10;
var myBoolean = true;
var myAny = "I can be anything";
myAny = 100;
var myUnknown = "Je suis une patatedouce";
if (typeof myUnknown === "string") {
    console.log(myUnknown.toUpperCase());
}
var myNull = null;
var myUndefined = undefined;
function myVoidFunction() {
    console.log("I do not return anything");
}
function myNeverFunction() {
    throw new Error("I never return");
}
var myArray = [1, 2, 3, 4, 5];
var myTuple = ["Hello", 42];
console.log("String:", message);
console.log("Number:", nbr);
console.log("Boolean:", myBoolean);
console.log("Any:", myAny);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
console.log("Void", myVoidFunction);
console.log("Never", myNeverFunction);
console.log("Number", myArray);
console.log("Tuple", myTuple);

let message:string ="hello PatateDouce";
let nbr:number = 10;
let myBoolean: boolean = true;
let myAny: any = "I can be anything";
myAny = 100;
let myUnknown: unknown = "Je suis une patatedouce";
if (typeof myUnknown === "string") 
{
    console.log(myUnknown.toUpperCase());
}
let myNull: null = null;
let myUndefined: undefined = undefined;
function myVoidFunction(): void 
{
    console.log("I do not return anything");
}
function myNeverFunction(): never {
    throw new Error("I never return");
}
let myArray: number[] = [1, 2, 3, 4, 5];
let myTuple: [string, number] = ["Hello", 42];

console.log("String:" , message);
console.log("Number:" ,nbr );
console.log("Boolean:" , myBoolean);
console.log("Any:" , myAny);
console.log("Null:" , myNull);
console.log("Undefined:", myUndefined);
console.log("Void", myVoidFunction);
console.log("Never", myNeverFunction);
console.log("Number", myArray);
console.log("Tuple", myTuple);










function add(a: number, b: number): number {
    return a + b;
}

function greet(name:string): string {
    return "salutation "+name;
}

let unknownVariable: unknown;
console.log(typeof(unknownVariable));

unknownVariable = greet("Steph");
console.log(typeof(unknownVariable) ,unknownVariable);


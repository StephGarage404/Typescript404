enum DaysOfWeek {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
}

const person = {
    firstName: "Stéphane",
    lastName: "Mumu",
    age: 28,
    dayOfBirth: DaysOfWeek.Monday
};

console.log(person.firstName ,person.lastName, person.age, person.dayOfBirth);

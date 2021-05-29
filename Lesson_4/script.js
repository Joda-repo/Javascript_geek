// let x = {
//     name: "Anton", 
//     lastname: "Fedorov", 
//     age: 32,
//     getFullName() {
//         console.log(this.name + ' ' + this.lastname);
//     }
// }
 
// console.log(
//     x['name']
//     )

// x.getFullName();

function Person (name, lastname, year){
    this.name = name;
    this.lastname = lastname;
    this.age = 2021 - year;
}

console.log (new Person('Artem', 'Neroba', 1989))
console.log (new Person('Anton', 'Fedorov', 1989))


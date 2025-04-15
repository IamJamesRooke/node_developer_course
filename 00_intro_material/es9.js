// Object spread operator
const animals = {
    tiger: 25,
    lion: 5,
    monkey: 2,
    bird: 12,
    cat: 8,
}

const {tiger, lion,...rest} = animals;

console.log(tiger)
console.log(rest)

const array = [1, 2, 3, 4, 5];
function sum (a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(sum(...array))
//  =-=-=-=-=-= vodro bacha der normal function
// function add(num1, num2) {
//   const result = num1 + num2;
//   console.log(num1, num2, result);
//   return result;
// }

// const sum = add(5, 7);

/*
// =-=-=-=-= default value set
function add(num1 = 0, num2 = 0) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

const sum = add(5, 10);
*/

// =-=-=-=-=-= optional chain start =-=-=-=-=

// data access

// const data = [{ id: 1, name: "abul", address: "kochu khet" }];
// console.log(data[0].address);

// example 2
// const products = {
//   count: 5000,
//   data: [
//     { id: 1, name: "lenovo laptop", price: 65000 },
//     { id: 2, name: "macBook", price: 165000 },
//   ],
// };
// console.log(products.data[1].price);

/*
// example 3
const user = {
  id: 5001,
  name: "Shoriful Raj",
  address: {
    street: {
      first: "54/12 uttor side",
      second: "poribag er goli",
    },
    city: "Dhaka",
  },
};

console.log(user.address.street.second);
*/

// =-=-=-=-=-=-= map start =-=-=-=-=-=-=

// const numbers = [4, 5, 2, 8, 10];

// const result = numbers.map((n) => n * 2);
// console.log(result);

// example 2
// const products = [
//   { id: 1, name: "lenovo", price: 650000 },
//   { id: 2, name: "dell", price: 450000 },
//   { id: 3, name: "hp", price: 40000 },
//   { id: 4, name: "mac", price: 1650000 },
// ];

// const result = products.map((product) => product.name);
// console.log(result);

/*
// =-=-=-=-=-=-= class methods start =-=-=-=-=-=-=

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("sir si teaching Math");
  }
}

const tapan = new Teacher("Tapon sir", "physics");
console.log(tapan);

const rashad = new Teacher("Rashad", "Javascript");
console.log(rashad);
*/

/*
// example 2
class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("gari chole na chole na chole na re");
  }
}

class Bus extends Vehicle {
  constructor(name, price, seat, ticketPrice) {
    super(name, price);
    this.seat = seat;
    this.ticketPrice = ticketPrice;
  }
}

class Truck extends Vehicle {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}

*/

/*
// practice task 1
let data = {
  sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "ABC primary school" },
          { location: "peters burg" },
        ],
      },
      {
        secondary: [
          { school_name: "ABC secondary school" },
          { location: "Secondary school location" },
        ],
      },
    ],
  },
};

const result = data.sophia.study[1].secondary[1];

console.log(result);

*/

/*

// practice task 2
let students = {
  2222: {
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
      "building no": 12,
      street: "St. Jonson",
      city: "Petersburg",
      country: "United States",
    },
  },
};

console.log(students[2222].address.city);

*/

/*

// practice task 3
const numbers = [1, 3, 5, 7, 9];

const output = numbers.map((x) => x + 1);
console.log(output);
*/

/*
// practice task 4
const deviated = [33, 50, 79, 78, 90, 101, 30];

const outputResult = deviated.filter((x) => x % 10 === 0);
console.log(outputResult);

*/

// =-=-=-=-=-=-= stop watch start =-=-=-=-=-=-=

function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}

const firstServer = kitchen();
console.log(firstServer());

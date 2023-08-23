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

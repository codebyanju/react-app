// Reduce

// "reduce() is used when I want to process an entire array and produce a single final value.
// That final value can be a number, an object, an array, a string, or any other data structure."

// "reduce iterates through an array and accumulates a result into a single value. 
// The accumulator carries the result from one iteration to the next, and we return the updated accumulator each time. 
// The final result can be a number, object, array, string, or any other value

reduce(// callback function, // initial value)

const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => { // callback function
     // Update accumulator
    return accumulator + currentValue }, 
  initialValue, // initial Value
);

// I chose reduce because it’s ideal for building this nested structure.
// I’ll use reduce to build the nested object.
// Reduce takes two arguments: a callback that runs for each element in array and an initial value.

//--------------------------------------------------------------------------  1 — Simple Sum
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total);

//--------------------------------------------------------------------------  2 Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Output
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

const result = fruits.reduce((countObj, fruit) => {
  countObj[fruit] = (countObj[fruit] || 0) + 1;
  return countObj;
}, {});

// IF ELSE
// const result = fruits.reduce((grouped, fruit) => {
//   if (grouped[fruit]) {
//     grouped[fruit] = grouped[fruit] + 1;
//   } else {
//     grouped[fruit] = 1;
//   }

//   return grouped;
// }, {});

//--------------------------------------------------------------------------  3 — Grouping Data
const users = [
  { name: "A", role: "admin" },
  { name: "B", role: "user" },
  { name: "C", role: "admin" },
];

// Output
// {
//   admin: [
//     { name: "A", role: "admin" },
//     { name: "C", role: "admin" }
//   ],
//   user: [
//     { name: "B", role: "user" }
//   ]
// }

const result = users.reduce((groups, user) => {
  if (!groups[user.role]) {
    groups[user.role] = [];
  }

  groups[user.role].push(user);

  return groups;
}, {});

// or

const result = users.reduce((rolesObj, user) => {
  rolesObj[user.role] = [...(rolesObj[user.role] || []), user];

  return rolesObj;
}, {});

// IF ELSE
// const result = users.reduce((rolesGrouped, user) => {
//   const role = user.role;

//   if (rolesGrouped[role]) {
//     rolesGrouped[role] = [...rolesGrouped[role], user]
//  // rolesGrouped[role].push(user);
//   } else {
//     rolesGrouped[role] = [user];
//   }

//   return rolesGrouped;
// }, {});

//--------------------------------------------------------------------------  4 — Transform array into object lookup
const courses = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" },
];

// Output
// {
//   1: { id: 1, name: "React" },
//   2: { id: 2, name: "Vue" }
// }

const result = courses.reduce((groups, course) => {
  groups[course.id] = { ...(groups[course] || {}), ...course };

  return groups;
}, {});

//--------------------------------------------------------------------------  5 — Transform array into object lookup
const users = [
  { firstName: "Anju", lastName: "Shaik", age: 30 },
  { firstName: "Abhi", lastName: "Thakur", age: 32 },
  { firstName: "Cookie", lastName: "Cuku", age: 8 },
  { firstName: "Milo", lastName: "Milus", age: 3 },
  { firstName: "Anju", lastName: "Thakur", age: 30 },
];

// output
// { 30: 2, 32:1, 8:1, 3:1 }

// IF ELSE
const result = users.reduce((groups, user) => {
  if (groups[user.age]) {
    groups[user.age] = groups[user.age] + 1;
  } else {
    groups[user.age] = 1;
  }

  return groups;
}, {});

//--------------------------------------------------------------------------  6 - Total Cart Summary (Medium)
const items = [
  { price: 10, quantity: 2 },
  { price: 5, quantity: 1 },
];

// output
// {
//   totalItems: 3,
//   totalAmount: 25
// }

const result = items.reduce(
  (acc, item) => {
    acc[totalItems] = acc[totalItems] + item.quantity;
    acc[totalAmount] = acc[totalAmount] + item.price * item.quantity;

    return acc;
  },
  { totalItems: 0, totalAmount: 0 },
);

//--------------------------------------------------------------------------  7. Find Oldest User (Medium)
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 35 },
  { name: "C", age: 25 },
];

// output
// { name: "B", age: 35 }

const result = users.reduce((acc, user) => {
  if (user.age > acc.age) {
    return user;
  }
  return acc;
}, users[0]);

//-------------------------------------------------------------------------- 8 Flatten Nested Arrays (Medium)
const arr = [[1, 2], [3, 4], [5]];
// [1, 2, 3, 4, 5]

function datamover(acc, curr) {
  acc = [...acc, ...curr]; // OR // acc.push(curr)

  return acc;
}

// function datamover(to, from) {
//   for (let i of from) {
//     if (Array.isArray(i)) {
//       for (let j of i) {
//         to.push(j);
//       }
//     } else to.push(i);
//   }

//   return to;
// }

arr.reduce(datamover, []);

//-------------------------------------------------------------------------- 9 Flatten Nested Arrays (Medium)
const arr = [[1, 2], [3, [4, 5]], [6]];
// [1, 2, 3, 4, 5, 6]

function datamover(acc, curr) {
  acc = [...acc, ...curr.flat(Infinity)];

  return acc;
}

arr.reduce(datamover, []);

//-------------------------------------------------------------------------- 10 find names whose age < 30
const users = [
  { name: "Anju", age: 29 },
  { name: "Abhi", age: 32 },
  { name: "Chotu", age: 25 },
];

// find names whose age < 30
//[ 'Anju', 'Chotu' ]

// FILTER , MAP
const output = users.filter((user) => user.age < 30).map((user) => user.name);

// REDUCE 1 - MUTATION
const output = users.reduce((acc, user) => {
  if (user.age < 30) acc.push(user.name);

  return acc;
}, []);


// REDUCE 2 - IMMUTABLE
const output = users.reduce((acc, user) => {
  if (user.age < 30) acc = [...acc, user.name];

  return acc;
}, []);

// I chose reduce because it’s ideal for building this nested structure.
// I’ll use reduce to build the nested object.
// Reduce takes two arguments: a callback that runs for each element in array and an initial value.

// In each iteration, I’ll check if the role exists in the accumulator. If not, I’ll create it.
// Then I check if the city exists under that role. If not, I create that too.
// Finally, I push the user into the correct array.
// In the end, reduce returns the nested object."


// What does push() return?
// Most people think it returns the array.
// It doesn't.
// It returns the new length of the array.

// const arr = [];
// const result = arr.push("A");

// console.log(arr);    // ["A"]
// console.log(result); // 1
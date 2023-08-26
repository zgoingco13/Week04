console.log('**********Step 1**********');


const ages = [3, 9,  23, 64, 2, 8, 28, 83] 
console.log(ages[(ages.length - 1)] - ages[0]);

ages.push(15, 23, 103);
console.log(ages[(ages.length - 1)] - ages[0]);

/* avgAge = sumOfAges / n
sumOfAges = (i + i + i + ...) where i is each value 
n = length of ages array*/

let sumOfAges = 0

// for (i = 0; i < ages.length; i++) {
//   sumOfAges += ages[i] 
// }

for (age of ages) {
  sumOfAges += age;
}

console.log(sumOfAges / ages.length);

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
console.log('**********Step 2**********');

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


//get length of each name in array

for  (i = 0; i < names.length; i++) {
  names[i] = names[i].length;
} 
let numberInNames = names;

console.log(numberInNames);

//like in step 1, find average of values in new array
let sumOfNames = 0
for (num of numberInNames) {
  sumOfNames += num
} 

console.log(sumOfNames / numberInNames.length);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////


names2 = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob', 'Jerry'];

let names3 = " ";

for (i = 0; i < names2.length; i++) {
  names3 += (names2[i] + ' ');
};

console.log(names3)

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 3**********');

console.log(`Last element in array is ${names2[names2.length-1]}`);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 4**********');

console.log(`First element in array is ${names2[0]}`);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 5**********');

for (i = 0; i < names2.length; i++) {
  names2[i] = names2[i].length
}

namesLength = names2
console.log(namesLength)

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 6**********');

let sumOfNamesLength = 0

for (i = 0; i < namesLength.length; i++) {
  sumOfNamesLength += namesLength[i];
} 
console.log(sumOfNamesLength);

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 7**********');

let repeatedWord = (word, n) => {
  let theWord = '';
  for (i = 0; i <= n; i++) {
    theWord += word;
  } 
  return theWord;
}

console.log(repeatedWord('joke', 4));

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 8**********');

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName('Led', 'Zepplin'));

 ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 9**********');

let numArray = [1, 1, 98];

let sumArray = 0
for (i = 0; i < numArray.length; i++) {
  sumArray += numArray[i];
}

let sumThinker = (sum) => {
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
}
console.log(sumThinker(sumArray));

 ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 10**********');

const num2Array = [2, 3, 4];

let avgFinder = ([a]) => {
  let sum2Array = 0;
  for (i = 0; i < num2Array.length; i++) {
    sum2Array += num2Array[i];
  } return (sum2Array / num2Array.length);
}

console.log(avgFinder(num2Array));

 ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 11**********');

const num1stArray = [3, 3, 3];
const num2ndArray = [3, 3, 3];

// let sum1st = 0
// for (num1st of num1stArray) {
//   sum1st += num1sta;
// }

// let sum2nd = 0
// for (num2nd of num2ndArray) {
//   sum2nd += num2nd
// }

let avgWinner = ([a], [b]) => {
  let sum1st = 0
for (num1st of num1stArray) {
  sum1st += num1st;
}
  let sum2nd = 0
    for (num2nd of num2ndArray) {
  sum2nd += num2nd;
}
  let avg1st = (sum1st / num1stArray.length);
  let avg2nd = (sum2nd / num2ndArray.length);
  if (avg1st > avg2nd) {
    return true;
  } else {
    return false;
  }
}

console.log(avgWinner(num1stArray, num2ndArray));

 ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 12**********');

/* Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/


let willBuyDrink = (isHotOutside, moneyInPocket) => {
  if (isHotOutside === true && moneyInPocket > 10.50) {
  return true;
  } else {
    return false;
}
}

console.log(willBuyDrink(true, 1.00));

 ///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

console.log('**********Step 13**********');

let pizzaHut = {
  name: 'Pizza Hut',
  toppings: ['mushrooms', 'sausage', 'cheese' ],
  shape: 'square'
};
let papaJohns = {
  name: 'Papa Johns',
  toppings: ['jalepenos', 'mushrooms', 'garlic sauce'],
  shape: 'round'
};
let roundTable = {
  name:'Round Table',
  toppings: ['pepperoni', 'tomato sauce', 'mushrooms'],
  shape: 'square'
}

let pizzaWinner = (pizza1, pizza2) => {
  if (pizza1.toppings.includes('mushrooms') && pizza1.shape === 'square') {
    return `${pizza1.name} is far superior.`;
  } else if (pizza2.toppings.includes('garlic sauce') && pizza2.shape === 'round') {
    return `${pizza2.name} for me, all day, everyday.`;
  } else {
     return `${pizza1.name} and ${pizza2.name} are the same deal, I just need to eat.`;
  }
}

console.log(pizzaWinner(roundTable, papaJohns));
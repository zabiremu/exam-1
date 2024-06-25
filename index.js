// return sum of two numbers
function calculateSum($num1, $num2) {
  return $num1 + $num2;
}
console.log(calculateSum(3, 5));

// return true or false based on even or odd
function isEven($num) {
  if ($num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));

// return max of an array
const findMax = [20, 34, 10, 14, 41, 40];
console.log(Math.max(...findMax));

function reverseString($str) {
  return $str.split("").reverse().join("");
}
console.log(reverseString("hello"));

function filterOddNumbers($arr) {
  let oddNumber = [];
  for (let i = 0; i < $arr.length; i++) {
    if ($arr[i] % 2 != 0) {
      oddNumber.push($arr[i]);
    }
  }
  return oddNumber;
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sumArray($arr) {
  let sum = 0;
  for (let i = 0; i < $arr.length; i++) {
    sum += $arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function sortArray($arr) {
  // return array ascending order
  return $arr.sort((a, b) => a - b);
}
console.log(sortArray([1, 6, 7, 8, 9, 2, 3, 4, 5, 10]));

function capitalizeFirstLetter($str) {
  return $str[0].toUpperCase() + $str.slice(1);
}
console.log(capitalizeFirstLetter("hello"));

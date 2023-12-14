// Function Name: sortByStringLength

// Number of Parameters: 1

// Description: The sortByStringLength function takes an array of strings and sorts them in ascending order based on their length. The function returns the sorted array.

// Technical Requirements:
// The input parameter should be an array of strings.
// The function should handle inputs with varying array lengths.
// The function should not use any built-in sorting methods or libraries.
// The function should only take an array containing strings.

// Example:
// sortByStringLength(['apple', 'banana', 'pear', 'kiwi']) => ['kiwi', 'pear', 'apple', 'banana']
// sortByStringLength(['JavaScript', 'HTML', 'CSS']) => ['CSS', 'HTML', 'JavaScript']

function bubbleSort(arr) {
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j].length > arr[j + 1].length) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

let strArr = ["Dawg", "wo00of", "cat", "meeow", "cow", "mooooo"];
let sortedArr = bubbleSort(strArr);

console.log(sortedArr);
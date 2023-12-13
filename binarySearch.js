// Function Name: "binarySearch"
// Number of Parameters: 2
// Description: The "binarySearch" function takes an array of sorted integers and a target integer as input. It performs a binary search on the array to find the index of the target integer. If the target integer is found, the function returns its index in the array. If the target integer is not found, the function returns -1.

// Technical Requirements:
// The first input parameter should be an array of sorted integers.
// The second input parameter should be a target integer.
// The function should handle inputs with varying lengths of the array.
// The function should not use any built-in methods or libraries for the binary search algorithm.

// Example:
// binarySearch([1, 2, 3, 4, 5], 3) => 2
// binarySearch([1, 2, 3, 4, 5], 6) => -1

// Unit Test:
// The function should return -1 when the target integer is not found in the array.
// The function should return the correct index when the target integer is at the beginning, middle, or end of the array.
// The function should handle inputs with duplicate numbers in the array.

// Note: For the purpose of this challenge, the array is assumed to be sorted in ascending order.

function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    //find the middle element
    //Math.floor() static method always rounds down and returns the largest int less than or equal to a given number.
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === key) {
      return console.log(`The key is ${middle}`)
      //If the middle element equals the key, return the middle value
    } else if (arr[middle] < key) {
      start = middle + 1;
      //if the middle element is less than the key, set the start index to one position after the middle element and continue the loop
    } else {
      end = middle - 1;
      return console.log(`The key is ${end}`)
    }
  }
  return console.log("Key not found");
}

binarySearch([1, 2, 3, 4, 5,], 4)
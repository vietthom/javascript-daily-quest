// Function Name: "reverseWords"
// Number of Parameters: 1
// Description: The "reverseWords" function takes a string as input and reverses the order of the words in the string. The function should return the reversed string.

// Technical Requirements:
// The input parameter should be a string.
// The function should handle inputs with multiple words separated by spaces.
// The function should not use any built-in methods or libraries to reverse the words or the string.

// Example:
// reverseWords("Hello world") => "world Hello"

// Unit Test:
// The function should return an empty string when the input is an empty string.
// The function should return the same word when the input is a single-word string.
// The function should reverse the order of words in a string with multiple words.



function reverseWords(str) {
  let [] = str;
  let strArray = str.split(" ");
  let reversedArray = strArray.reverse();
  let finalReverse = reversedArray.join(" ");
  console.log(finalReverse);
}

reverseWords("No how about you do it");
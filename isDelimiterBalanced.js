function isDelimiterBalanced(inputStr) {
  //Initialize empty stack to keep track of opening delimiters
  let stack = [];

  //Define open & close delimiters, and create a map for pairs

  const openDelimiter = '({[';
  const closeDelimiter = ')}]';
  const delimiterPairs = { ')': '(', '}': '{', ']': '[' };

  //Loop through each character in the input string using a for loop
  for(let char of inputStr) {
    // If the character is an opening delimiter, push it into the stack
    if(openDelimiter.includes(char)){
      stack.push(char);
    }
    // if the character is a closing delimiter
    else if (closeDelimiter.includes(char)) {
    // check if the stack is empty or if the top of the stack matches the expected opening delimiter
    if (stack.length === 0 || stack.pop() !== delimiterPairs[char]) {
    //If not, then the brackets are unbalanced
      return false;   
    }
    }
    //If the character is neither an open or closed delimiter, return false
    else if (!'(){}[]'.includes(char)) {
      return false;
    }
  }
  // check if there are any unclosed delimters left in the stack
  return stack.length === 0;
}

const inputString = '({[]})';
const result = isDelimiterBalanced(inputString);
console.log(result);
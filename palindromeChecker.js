function palindromeChecker(string) {

  // convert string to an array
  const stringValues = string.split('');

  // reverse the array values
  const reverseStringValues = stringValues.reverse();

  // convert array to string
  const reverseString = reverseStringValues.join('');

  if(string == reverseString) {
      console.log('It is a palindrome');
  }
  else {
      console.log('It is not a palindrome');
  }
}

//take input
const string ='racecar';

palindromeChecker(string);
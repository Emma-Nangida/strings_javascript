//Write a function that takes a string as 
//input and returns the number of vowels in the string

function vowel_count(str1)
{
  var vowel_list = 'aeiou';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("I can tie a tie that cantai can tai"));

// //Write a function that takes an array of numbers 
// //as input and returns the sum of all the numbers.
function arrOfNumbers(nums){
    var sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
       
    }
    return sum

}
let arr=[2,3,4,6,12,16,18]
 console.log(arrOfNumbers());


//Write a function that takes two numbers as input and returns 
//true if their sum is greater than 100, and false otherwise.
function greaterNums(num1,num2){
 sum=0
 num1=20
 num2=50
 if(num1+num2>100){
    return true
 }
 else{
    return false
 }
}
 console.log(greaterNums());

 //Write a function that takes in a array of numbers as a parameter 
 //and returns the second largest number in the array
 function second_largest(numbers){
    
        numbers.sort(function(a, b) {
          return b - a;
        });
        return numbers[1];
      }
      let numbers = [40, 30, 20, 10, 90, 70];
      let secondLargest =second_largest(numbers);
      console.log(secondLargest);
    


//Write a function that takes a string as a parameter and returns 
//true if the string is a palindrome and false otherwise

function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = "dad";
const value = checkPalindrome(string);

console.log(value);



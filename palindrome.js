function palindrome(kata) {

 var arr = [];
 var count = kata.length - 1;

 for(var i = 0; i < kata.length; i++){
   arr[count] = kata[i];
   count--;
 }

 var word = "";

 for(var j = 0; j < arr.length; j++){
   word += arr[j];
 }

 if(word === kata){
   return true;
 }

 else{
   return false;
 }

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

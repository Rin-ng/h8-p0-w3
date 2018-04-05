function angkaPalindrome(num) {


 do{

    num++;
  var n = num.toString();
  var arr = [];
  var count = n.length - 1;
  var reversed = "";

    for (var i = 0; i < n.length; i++){
      arr[count] = n[i];
      count--;
    }

    reversed = arr.join("");
    
  }while(n !== reversed)

  return num;



}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

function balikString(sentence){
  var arr = [];
  var reverseCount = sentence.length-1;

  for(var i = 0; i < sentence.length; i++){
    arr[reverseCount] = sentence[i];
    reverseCount--;
  }
  
  var reversed = arr.join("");

  console.log(reversed);

}

balikString("Hello World!");

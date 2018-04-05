function balikString(sentence){
  var arr = [];
  var reverseCount = sentence.length-1;

  for(var i = 0; i < sentence.length; i++){
    arr[reverseCount] = sentence[i];
    reverseCount--;
  }

  console.log(arr);

}

balikString("Hello World!");

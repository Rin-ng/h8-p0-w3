function pasanganTerbesar(num) {
  var arr = num.toString().split("");
  var temp = [0,0];
  console.log(arr);

  for(var i = 0; i < arr.length -1; i++){
    if(temp[0] < arr[i]){
      temp[0] = arr[i];
      temp[1] = arr[i+1];
    }

}

 return temp;
}

//TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

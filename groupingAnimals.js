function groupAnimals(animals) {
  var arr =[[]];
  var firstChar = "";
  var count = 0; //checking how many variations.
  var index = 0;
  var num = 0;
  animals.sort();

  for(var i = 0; i < animals.length-1; i++){
    if (animals[i].charAt(0) === animals[i+1].charAt(0) ){
      count++;
    }

  }
  count += (animals.length % 2);

  while(arr.push([]) < count);


for(var j = 0; j < animals.length   ; j++){
 if((j < animals.length - 1) && animals[j].charAt(0) === animals[j+1].charAt(0)){
   arr[index].push(animals[j]);
   arr[index].push(animals[j+1]);

 }

 else if(animals[j].charAt(0) !== animals[j-1].charAt(0)){

  // console.log(animals[j]);
   arr[index].push(animals[j]);
    index++;
 }


 else{
   index++;
 }
}

return arr;


}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]*/

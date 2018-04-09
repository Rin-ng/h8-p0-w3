function groupAnimals(animals) {
  var arr =[[]];
  var count = 0;
  var index = 0;
  animals.sort();
  //console.log(animals);

  for(var i = 0; i < animals.length-1; i++){
    if (animals[i].charAt(0) === animals[i+1].charAt(0) ){
      count++;

    }

  }

  for(var k = 1; k < animals.length - 1; k++){
    if(animals[k].charAt(0) !== animals[k-1].charAt(0)){
     // console.log(animals[k]);
      count++;
    }
  }

  count--;

  while(arr.push([]) < count);
  //console.log(arr);
 for(var j = 0; j < animals.length; j++){
 if((j < animals.length - 1) && animals[j].charAt(0) === animals[j+1].charAt(0)){
   arr[index].push(animals[j]);
   arr[index].push(animals[j+1]);

 }

 else if(animals[j].charAt(0) !== animals[j-1].charAt(0)){
   //console.log(animals[j]);
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
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'foo']));

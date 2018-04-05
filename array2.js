var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]



function dataHandling(data){
  var index = data.length;
  var index2 = data.length + 1;
  var category = ["Nomor ID:", "Nama Lengkap:", "TTL:", "", "Hobi:"];

  for(var i = 0; i < index; i++){
    for(var j = 0; j < index2; j++){
      if(category[j] === "TTL:" && j === 2){
        console.log(category[j] + " " + data[i][j] + " " + data[i][j+1]);
        j++;
      }
      else{
    console.log(category[j] + " "+ data[i][j]);
    }
  }
  console.log("\n");
  }
}

dataHandling(input);

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */


 function dataHandling2(data){

   //Changed data of the Array
   data.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
   data.splice(4,4,"Pria", "SMA Internasional Metro");
   console.log(input);

  //split date
   var date = data[3].split("/");
   var month = date[1];
   var month2 = "";
  //switch month format
   switch (month){
     case '01': {
       month2 = "January";
       break;
     }

     case '02': {
       month2 = "February";
       break;
     }

     case '03': {
       month2 = "March";
       break;
     }
      case '04': {
       month2 = "April";
       break;
     }
          case '05': {
       month2 = "May";
       break;
     }
          case '06': {
       month2 = "June";
       break;
     }
          case '07': {
       month2 = "July";
       break;
     }
          case '08': {
       month2 = "August";
       break;
     }
          case '09': {
       month2 = "September";
       break;
          }
      case '10': {
       month2 = "October";
       break;
     }
          case '11': {
       month2 = "November";
       break;
     }
          case '12': {
       month2 = "December";
       break;
     }
     default: {
       month2 = "invalid";
       break;
     }

   }

  console.log(month2);

  //turns value to int to be sorted
    date[0] = parseInt(date[0]);
    date[1] = parseInt(date[1]);
    date[2] = parseInt(date[2]);
    if(date[1] < 10){
      date[1] = "0" + date[1];
    }

   //sort the date
    console.log(date.sort(function(value1, value2) { return value1< value2}));

    //Get original unsorted value
    var date2 = data[3].split("/");

   //date with - : 21-05-1989
     console.log( date2.join("-"));

   //Slice Name to 15 characters only
   var name = data[1].slice(0,14);

   console.log(name);
 }


dataHandling2(input);

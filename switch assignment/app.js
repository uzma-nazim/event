//| FUNCTIONS| SWITCH | WHILE.. DO-WHILE |

//Question no:1

// function power(a,b){
//     var c= a*a; 
//     var d= b*b;
//     console.log(c,d)
// }
// power(2,3);


//Question no:2

// var year = +prompt("Enter Year");
// switch (year) {

//     case 2012:
//         alert("its leap year");
//         break;

//     case 2016:
//         alert("its leap year");
//         break;

//     case 2020:
//         alert("its leap year");
//         break;
//     default:
//         alert("its not leay year");
// }


//Question no:3

// function calculation(a, b, c) {
//     var s = (a + b + c) / 2;

//     function area() {
//         var area = s * (s - a) * (s - b) * (s - c);
//         var root = Math.sqrt(area);
//         document.write("The area of tringke is " + root);
//     }
//     area()
// }
// calculation(2, 3, 4);

//Question no:4




//Question no:5


// function index(sring) {


//     var arr = sring.split("");
//     console.log(arr);
//     for (i = 0; i < arr.length; i++) {
//         arr[i];
//         console.log(i);
//     }


// }
// index("uzma");



//Question no:6



// function check() {

//     var res = "";
//     var srt = "Pleases read this application and give me gratuity";
//     console.log(srt);


//     for (i = 0; i < srt.length; i++) {

//         if ("aeiouAEIOU".match(srt[i]) === null) {


//             res += srt[i];
//         }
//     }
//     return res;
// }
// console.log(check());



// function accur() {

//     var sentence = "Pleases read this application and give me gratuity";
//     var count = 0;

//     for (i = 0; i < sentence.length; i++) {
//         var text = sentence[i]
//         switch (sentence) {

//             case (text == "a"):
//                 count++
//         }




//     }


//     return count;
// }
// console.log("Accurrences " + accur())


//Question no:8



// function meter() {

//     var distance = +prompt("Enter Diatance");
//     var mt = distance * 1000;
//     document.write(distance + " kilomter is equal to " + mt + " Meter");


// }
// meter();




// function feet() {

//     var distance = +prompt("Enter Diatance");
//     var ft = distance * 3280.8;
//     document.write(distance + " kilomter is equal to " + ft + " feet");


// }
// feet();





// function inch() {

//     var distance = +prompt("Enter Diatance");
//     var inches = distance * 39370.1;
//     document.write(distance + " kilomter is equal to " + inches+ " inches");


// }
// inch();




// function CM() {

//     var distance = +prompt("Enter Diatance");
//     var centimter = distance * 100000;
//     document.write(distance + " kilomter is equal to " + centimter+ "  Centimeters");


// }
// CM();




//Questoin no:09

// function bonusPay() {

//     var i = 1;
//     while (i <= 2) {

//         var hour = +prompt("Enter your working hour of employ" + i);
//         if (hour > 40) {

//             var overTime = hour - 40;
//             var pay = overTime * 12;
//             document.write("Your over time pay is Rs." + pay+"<br>");

//         }
//         else {

//             document.write("You have to have to work more then 40 hour to get bonus")

//         }

//         i++

//     }



// }


// bonusPay();

//Questoin no:10



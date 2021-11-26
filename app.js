function clickme() {

    alert("Hello")
}

function iphoneImages() {

    alert("Thanks for purchasing a phone from us")
}
function dlt() {

    var get = document.getElementById("tr1");
    var em = get.innerHTML = ""

}
function dlt2() {

    var get = document.getElementById("tr2");
    var em = get.innerHTML = ""

}
function dlt3() {

    var get = document.getElementById("tr3");
    var em = get.innerHTML = ""

}
function dlt4() {

    var get = document.getElementById("tr4");
    var em = get.innerHTML = ""

}

function changeImage() {

    var get = document.getElementById("img1")
    get.src = "./images/catooo.jpg"
}

function reverseImage() {

    var get = document.getElementById("img1")
    get.src = "./images/cat.jpg"
}

function counter() {

    var get = document.getElementById("myinput").value
    get++
    document.getElementById("myinput").value = get
}
function dec() {

    var get = document.getElementById("myinput").value;
    get--
    if (get <= 0) {
        get = 0
    }
    else {

        document.getElementById("myinput").value = get
    }
}



function see() {

    var str = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis mollitia reiciendis eius delectus, quae incidunt natus recusandae ratione fuga ullam nihil nam at? Aspernatur, accusamus quisquam soluta aliquid doloremque quam .";

    var get = document.getElementById("det");
    get.innerHTML += str
    var link = document.getElementById("a1")
    link.style.display = "none"

}

function data() {

    var get = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    alert("Your email is " + get + '\n' + " Your Passord is " + pass);
 

}

var rownum = -1
function studentDetails() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var clas = document.getElementById("class").value;

    if (!checkEmpyt()) {
        var display = document.getElementById("table1");
        var row = display.insertRow(rownum);
        var cel1 = row.insertCell(0);
        var cel2 = row.insertCell(1);
        var cel3 = row.insertCell(2);

        cel1.innerHTML = fname;
        cel2.innerHTML = lname;
        cel3.innerHTML = clas;

        var name = document.getElementById("fname").value = "";
        var name = document.getElementById("lname").value = "";
        var las = document.getElementById("class").value = "";
    }
}

function deleteed() {


    var get = document.getElementById("table1")
    get.deleteRow(1);
    var fname = document.getElementById("fname").value = "";
    var lname = document.getElementById("lname").value = "";
    var clas = document.getElementById("class").value = "";
}




function checkEmpyt() {

    var empty = false;

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var clas = document.getElementById("class").value;


    if (fname === "") {
        alert("please fill the first name input")
        empty = true
    }

    else if (lname === "") {
        alert("please fill the last name input")
        empty = true
    }
    else if (clas === "") {
        alert("please fill the class input")
        empty = true
    }
    return empty
}
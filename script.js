// function showCustom() {
//     document.getElementById("author_layout").setAttribute("class","customauthor");
//     document.getElementById("authorh1").innerText = "Mohiuddin Tarek";
// }

// function showOrginal() {
//     document.getElementById("author_layout").setAttribute("class","author");
//     document.getElementById("authorh1").innerText = "Tofayel Ahmed";
// }

var element = document.getElementsByClassName('author').innerHTML = "Mohiuddin Tarek";

const maindiv = document.getElementById("test");

maindiv.getElementsByTagName("p").innerHTML = "Hello Jerin";

var x = document.getElementById("test");
var y = x.getElementsByTagName("p").innerHTML = "Hello Mahmood";

document.write(y);




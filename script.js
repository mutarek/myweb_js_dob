function showCustom() {
    document.getElementById("author_layout").setAttribute("class","customauthor");
    document.getElementById("authorh1").innerText = "Mohiuddin Tarek";
}

function showOrginal() {
    document.getElementById("author_layout").setAttribute("class","author");
    document.getElementById("authorh1").innerText = "Tofayel Ahmed";
}

var element = document.getElementsByClassName('author').innerHTML = "Mohiuddin Tarek";
console.log(element.innerHTML);





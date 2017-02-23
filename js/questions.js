// for (var i=1; i<4; i++) {
//   var modal = document.getElementById('myModal');
//   var btn = document.getElementById("myBtn-" + i);
//   var span = document.getElementsByClassName("close")[0];
//   if (button != null) {
//     button.onclick = function() {
//       modal.style.display = "block";
//       document.getElementById("myBtn-" + i).style.background = "yellowgreen";
//     }
//   }
// }
//
// Get the modal
var modal1 = document.getElementById('myModal-1');
var modal2 = document.getElementById('myModal-2');
var modal3 = document.getElementById('myModal-3');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn-1");
var btn2 = document.getElementById("myBtn-2");
var btn3 = document.getElementById("myBtn-3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
    document.getElementById("myBtn-1").style.background = "yellowgreen";
}

btn2.onclick = function() {
    modal2.style.display = "block";
    document.getElementById("myBtn-2").style.background = "yellowgreen";
}

btn3.onclick = function() {
    modal3.style.display = "block";
    document.getElementById("myBtn-3").style.background = "yellowgreen";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
    document.getElementById("myBtn-1").style.background = "white";
}

span.onclick = function() {
    modal2.style.display = "none";
    document.getElementById("myBtn-2").style.background = "white";
}

span.onclick = function() {
    modal3.style.display = "none";
    document.getElementById("myBtn-3").style.background = "white";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal1.style.display = "none";
        document.getElementById("myBtn-1").style.background = "white";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal2.style.display = "none";
        document.getElementById("myBtn-2").style.background = "white";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal3.style.display = "none";
        document.getElementById("myBtn-3").style.background = "white";
    }
}

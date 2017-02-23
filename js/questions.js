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
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn-1");
var btn2 = document.getElementById("myBtn-2");
var btn3 = document.getElementById("myBtn-3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal.style.display = "block";
    document.getElementById("myBtn-1").style.background = "yellowgreen";
}

btn2.onclick = function() {
    modal.style.display = "block";
    document.getElementById("myBtn-2").style.background = "yellowgreen";
}

btn3.onclick = function() {
    modal.style.display = "block";
    document.getElementById("myBtn-3").style.background = "yellowgreen";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

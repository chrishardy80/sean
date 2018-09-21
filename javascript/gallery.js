

var slideIndex = 1;


function plusDivsLeft(n) {
  showDivsLeft(slideIndex += n);
}

function plusDivsRight(n) {
  showDivsRight(slideIndex += n);
}
function showDivsRight(n) {
  var i;
  var x = document.getElementsByClassName("movie");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  $(x[slideIndex-1]).stop().show("drop", {distance: 1000}, 800);

}

function showDivsLeft(n) {
  var i;
  var x = document.getElementsByClassName("movie");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  $(x[slideIndex-1]).stop().show("drop", {direction: "right", distance: 1000}, 800);
}
$(document).ready(gallery);

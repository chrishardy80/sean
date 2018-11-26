

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
      $(x[i]).stop(true,true).hide("drop", {direction: "right", distance: 500}, 300);
  }
  $(x[slideIndex-1]).stop(true,true).delay(350).show("drop", {direction: "left", distance: 600}, 350);

}

function showDivsLeft(n) {
  var i;
  var x = document.getElementsByClassName("movie");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
      $(x[i]).stop(true,true).hide("drop", {direction: "left", distance: 500}, 300);;
  }
  $(x[slideIndex-1]).stop(true,true).delay(350).show("drop", {direction: "right", distance: 600}, 350);
}
$(document).ready(gallery);

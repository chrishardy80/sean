function main () {

  $(".fav").hide();

  $(window).scroll(function(){
  var fixedOne = $("div#elementone");

  var fixed_positionOne = $("div#elementone").offset().top;
  var fixed_heightOne = $("div#elementone").height();

  var toCross_positionOne = $("#biography").offset().top;
  var toCross_heightOne = $("#biography").height();

  if (fixed_positionOne + fixed_heightOne  < toCross_positionOne) {
    fixedOne.switchClass('black', 'white');
  } else if (fixed_positionOne > toCross_positionOne + toCross_heightOne) {
    fixedOne.switchClass('black', 'white');
  } else {
    fixedOne.switchClass('white', 'black');
  }
});

$(window).scroll(function(){
var fixedTwo = $("div#elementtwo");

var fixed_positionTwo = $("div#elementtwo").offset().top;
var fixed_heightTwo = $("div#elementtwo").height();

var toCross_positionTwo = $("#biography").offset().top;
var toCross_heightTwo = $("#biography").height();

if (fixed_positionTwo + fixed_heightTwo  < toCross_positionTwo) {
  fixedTwo.switchClass('black', 'white');
} else if (fixed_positionTwo > toCross_positionTwo + toCross_heightTwo) {
  fixedTwo.switchClass('black', 'white');
} else {
  fixedTwo.switchClass('white', 'black');
}

});

$(window).scroll(function(){
var fixedThree = $("div#elementthree");

var fixed_positionThree = $("div#elementthree").offset().top;
var fixed_heightThree = $("div#elementthree").height();

var toCross_positionThree = $("#biography").offset().top;
var toCross_heightThree = $("#biography").height();

if (fixed_positionThree + fixed_heightThree  < toCross_positionThree) {
  fixedThree.switchClass('black', 'white');
} else if (fixed_positionThree > toCross_positionThree + toCross_heightThree) {
  fixedThree.switchClass('black', 'white');
} else {
  fixedThree.switchClass('white', 'black');
}

});

$(window).scroll(function(){
var fixedFour = $("div#elementfour");

var fixed_positionFour = $("div#elementfour").offset().top;
var fixed_heightFour = $("div#elementfour").height();

var toCross_positionFour = $("#biography").offset().top;
var toCross_heightFour = $("#biography").height();

if (fixed_positionFour + fixed_heightFour  < toCross_positionFour) {
  fixedFour.switchClass('black', 'white');
} else if (fixed_positionFour > toCross_positionFour + toCross_heightFour) {
  fixedFour.switchClass('black', 'white');
} else {
  fixedFour.switchClass('white', 'black');
}

});

function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

$(window).on("scroll resize", function(){
  var favThing = $("div.fav");
  if (inViewport($('#landing')) < 350 ) {
    $(favThing).fadeIn(1800);
    $('#sean').switchClass('big', 'small', 1800);
    $('#writer').switchClass('alsobig', 'alsosmall', 1800);
    $('#navigation').switchClass('navone', 'navtwo', 1800);

  }
  else {
    $(favThing).fadeOut(1800);
    $('#sean').switchClass('small', 'big', 1800);
    $('#writer').switchClass('alsosmall', 'alsobig', 1800);
    $('#navigation').switchClass('navtwo', 'navone', 1800);
  }
  if (inViewport($('#biography')) > 600 ) {
    $('#heading').fadeIn(500);
    /*$('#sectionone').show("drop", {direction: "up",distance: 100}, 400);*/

  }
  if (inViewport($('#biography')) < 600 ) {
    $('#heading').fadeOut(500);
    /*$('#sectionone').hide("drop", {direction: "down", distance: 100}, 400);*/
  }
});

$("#writer").hide();
$("#writer").fadeIn(3000);

function inViewportTwo($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

$(window).on("scroll resize", function(){
  var borderThing = $("div#landing");
  if (inViewportTwo($('#biography')) < 200 ) {
    $(borderThing).addClass("border");
  }
  else {
    $(borderThing).removeClass("border");
  }

});

}

function gallery () {

$(".movie").hide();
$("#donovan").show();










}

$(document).ready(main);
$(document).ready(gallery);

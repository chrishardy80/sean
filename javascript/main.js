function main () {

  $("#mobilenav, .entry").click(function(){
  $("#cross").toggle();
  $("#bars").toggle();
  $("#mobile").toggle( "blind", {direction: "left", easing: "easeOutQuad"}, 500,);
});


  $("#cross, #mobile").hide();







  $(window).scroll(function(){
  var fixedOne = $("div#elementone");
  var fixed_positionOne = $("div#elementone").offset().top;
  var fixed_heightOne = $("div#elementone").height();

  var toCross_positionOne = $('#sliderInnerTwo').offset().top;
  var toCross_heightOne = $('#sliderInnerTwo').height();

  if (fixed_positionOne + fixed_heightOne  < toCross_positionOne) {
    anime({
      targets: '#elementone',
      color: '#f1f1f1',
      duration: 300,
      easing: 'linear'
    });
  } else if (fixed_positionOne > toCross_positionOne + toCross_heightOne) {
    anime({
      targets: '#elementone',
      color: '#f1f1f1',
      duration: 300,
      easing: 'linear'
    });
  } else {
    anime({
      targets: '#elementone',
      color: '#1a2930',
      duration: 300,
      easing: 'linear'
    });
  }
});

$(window).scroll(function(){
var fixed_positionTwo = $("div#elementtwo").offset().top;
var fixed_heightTwo = $("div#elementtwo").height();

var toCross_positionTwo = $("#sliderInnerTwo").offset().top;
var toCross_heightTwo = $("#sliderInnerTwo").height();

if (fixed_positionTwo + fixed_heightTwo  < toCross_positionTwo) {
  anime({
    targets: '#elementtwo',
    color: '#f1f1f1',
    duration: 300,
    easing: 'linear'
  });
} else if (fixed_positionTwo > toCross_positionTwo + toCross_heightTwo) {
  anime({
    targets: '#elementtwo',
    color: '#f1f1f1',
    duration: 300,
    easing: 'linear'
  });
} else {
  anime({
    targets: '#elementtwo',
    color: '#1a2930',
    duration: 300,
    easing: 'linear'
  });
}

});

$(window).scroll(function(){
var fixed_positionThree = $("div#elementthree").offset().top;
var fixed_heightThree = $("div#elementthree").height();

var toCross_positionThree = $("#sliderInnerTwo").offset().top;
var toCross_heightThree = $("#sliderInnerTwo").height();

if (fixed_positionThree + fixed_heightThree  < toCross_positionThree) {
  anime({
  targets: '#elementthree',
  color: '#f1f1f1',
  duration: 300,
  easing: 'linear'
  });
} else if (fixed_positionThree > toCross_positionThree + toCross_heightThree) {
  anime({
  targets: '#elementthree',
  color: '#f1f1f1',
  duration: 300,
  easing: 'linear'
  });
} else {
  anime({
    targets: '#elementthree',
    color: '#1a2930',
    duration: 300,
    easing: 'linear'
  });
}

});

$(window).scroll(function(){
var fixed_positionFour = $("div#elementfour").offset().top;
var fixed_heightFour = $("div#elementfour").height();

var toCross_positionFour = $("#sliderInnerTwo").offset().top;
var toCross_heightFour = $("#sliderInnerTwo").height();

if (fixed_positionFour + fixed_heightFour  < toCross_positionFour) {
  anime({
  targets: '#elementfour',
  color: '#f1f1f1',
  duration: 300,
  easing: 'linear'
  });
} else if (fixed_positionFour > toCross_positionFour + toCross_heightFour) {
  anime({
  targets: '#elementfour',
  color: '#f1f1f1',
  duration: 300,
  easing: 'linear'
  });
} else {
  anime({
    targets: '#elementfour',
    color: '#1a2930',
    duration: 300,
    easing: 'linear'
  });
}

});

function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

$(window).on("scroll resize", function(){
  if (inViewport($('#landing')) < 500 ) {
    anime({
      targets: '.fav',
      opacity: 1,
      duration: 1000,
      easing: 'easeInOutQuad'
    });

    anime({
      targets: '#landing',
      backgroundColor: '#d3d1d1',
      color: '#1a2930',
      duration: 1000,
      easing: 'easeOutQuad'
    });

    anime({
      targets: '.bar, .crossbar',
      backgroundColor: '#f1f1f1',
      duration: 1000,
      easing: 'easeOutQuad'
    });
  }
  else {

    if($('#mobile').is(':visible')){
      $("#mobile").hide( "blind", {direction: "left", easing: "easeOutQuad"}, 500,);
      $("#bars").show();
      $("#cross").hide();
    }

    anime({
      targets: '#landing',
      color: '#f1f1f1',
      backgroundColor: '#1a2930',
      duration: 1000,
      easing: 'easeInQuad'
    });

    anime({
      targets: '.bar, .crossbar',
      backgroundColor: '#1a2930',
      duration: 1000,
      easing: 'easeOutQuad'
    });
  }

if ($('#biography').width() > 1100) {
  if (inViewport($('#sectionone')) > 300 ) {

    $("#about").show( "blind", {direction: "right", easing: "easeOutQuad"}, 500,);

  anime({

  targets: '#sectionone .arrow',
  translateX: 20,
  opacity: 1,
  easing: 'easeInOutQuad'
});
  }
  else {
    anime({
  targets: '#sectionone .arrow',
  translateX: 0,
  opacity: 0,
  easing: 'easeInOutQuad'
});
  }

if ($('#about').height() > 300) {
  if (inViewport($('#sectionone')) < 300 ) {
    $("#about").fadeOut(300);
  }

  if (inViewport($('#sectiontwo')) < 300 ) {
    $("#filmographylink").fadeOut(500);
  }

  if (inViewport($('#sectionthree')) < 300 ) {
    $("#journallink").fadeOut(500);
  }


  if (inViewport($('#sectiontwo')) > 300 ) {

    $("#filmographylink").show( "blind", {direction: "left", easing: "easeOutQuad"}, 500,);

  anime({
  targets: '#sectiontwo .arrow',
  translateX: -20,
  opacity: 1,
  easing: 'easeInOutQuad'
});
  }
  else {
    anime({
  targets: '#sectiontwo .arrow',
  translateX: 0,
  opacity: 0,
  easing: 'easeInOutQuad'
});
  }



  if (inViewport($('#sectionthree')) > 300 ) {
    $("#journallink").show( "blind", {direction: "right", easing: "easeOutQuad"}, 500,);
  anime({
  targets: '#sectionthree .arrow',
  translateX: 20,
  opacity: 1,
  easing: 'easeInOutQuad'
});
  }
  else {
    anime({
  targets: '#sectionthree .arrow',
  translateX: 0,
  opacity: 0,
  easing: 'easeInOutQuad'
});
  }
}
}
else {
  $("#about, #filmographylink, #journallink").show();
}

});

$("#writer").hide();
$("#writer").fadeIn(3000);


}






$(document).ready(main);

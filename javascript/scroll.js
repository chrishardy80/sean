$(document).ready(function() {
console.log(window.innerWidth);
let top;
let slideTwo;
let slideThree;
var landing = document.querySelector("#landing");
var content = document.querySelector("#maincontent");
var title = document.querySelector("#title");
var fav = document.querySelector(".fav");
var image = document.querySelector(".imagecontainer");
var Chris = document.querySelector("#Chris");
var developer = document.querySelector("#Developer");


  function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));

  }

  const ratio = 1/$(window).width();
  let calculator = ratio * $(window).width();
  console.log("calculator=" + calculator);
  let developerFont = (calculator*31);
  let chrisFont = (calculator*70);



  top = (inViewport($('#sliderInner')))/(inViewport($('#slider')))*100;
  slideTwo = (inViewport($('#sliderInnerTwo')))/(inViewport($('#slider')))*100;
  slideThree = (inViewport($('#sliderInnerThree')))/(inViewport($('#slider')))*100;


$(window).on("scroll resize", function(){
    top = (inViewport($('#sliderInner')))/(inViewport($('#slider')))*100;
    slideTwo = (inViewport($('#sliderInnerTwo')))/(inViewport($('#slider')))*100;
    slideThree = (inViewport($('#sliderInnerThree')))/(inViewport($('#slider')))*100;
    //console.log("top=" + top);
    //console.log("slideTwo=" + slideTwo);




    if (top > 0)
      {
    landing.style.top = (top - 100) + "vh";
    image.style.top = (top - 100) + "vh";
  }
  else {
    landing.style.top = "-100vh";
    image.style.top = "-100vh";
  }
    if (top < 60 && top > 8) {
      title.style.top = (top * 0.7 -2.5) + "vh";
      fav.style.top = (top * 0.7 -2.5)  + "vh";
    }
    else if (top > 60)
      {
        title.style.top = "40vh";
        fav.style.top ="40vh";
      }
    else
    {
      title.style.top = "3.5vh";
      fav.style.top ="3.5vh";
    }

    //if (top > 50 && top <= 110) {
    //  Chris.style.fontSize=(top + 30) * ((chrisFont)/130) + "px";
    //  developer.style.fontSize=((top + 20) * (chrisFont/169)) + "px";

    //}









  });




});

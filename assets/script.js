window.onscroll = function () {
  if (window.pageYOffset > 1) {
  }
  //page-1
  if (window.pageYOffset < 600 && window.pageYOffset >= 0) {
    console.log("test");
    document.getElementById("uparrow").style.opacity = 0;
    document.getElementById("svg1").style.fill = "white";
    document.getElementById("svg2").style.fill = "white";
    document.getElementById("svg3").style.fill = "white";
    document.getElementById("svg4").style.fill = "white";
    document.getElementById("svg5").style.fill = "white";
    document.getElementById("svg6").style.fill = "white";
    document.getElementById("svg7").style.fill = "white";
    document.getElementById("svg8").style.fill = "white";
    document.getElementById("svg9").style.fill = "white";
  }
  //page-2
  if (window.pageYOffset < 1300 && window.pageYOffset > 700) {
    document.getElementById("uparrow").style.opacity = 100;
    document.getElementById("svg1").style.fill = "black";
    document.getElementById("svg2").style.fill = "black";
    document.getElementById("svg3").style.fill = "black";
    document.getElementById("svg4").style.fill = "black";
    document.getElementById("svg5").style.fill = "black";
    document.getElementById("svg6").style.fill = "black";
    document.getElementById("svg7").style.fill = "black";
    document.getElementById("svg8").style.fill = "black";
    document.getElementById("svg9").style.fill = "black";
  }
  //page-3
  if (window.pageYOffset > 1300 && window.pageYOffset < 2500) {
    document.getElementById("svg1").style.fill = "white";
    document.getElementById("svg2").style.fill = "white";
    document.getElementById("svg3").style.fill = "white";
    document.getElementById("svg4").style.fill = "white";
    document.getElementById("svg5").style.fill = "white";
    document.getElementById("svg6").style.fill = "white";
    document.getElementById("svg7").style.fill = "white";
    document.getElementById("svg8").style.fill = "white";
    document.getElementById("svg9").style.fill = "white";
  }
};

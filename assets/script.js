const links = document.querySelectorAll(".sidenavtxt");
const topleftline = document.getElementById("topleftline");
const toprightline = document.getElementById("toprightline");
const bottomline = document.getElementById("bottomline");

window.onscroll = function () {
  if (window.pageYOffset > 1) {
  }
  //page-1
  if (window.pageYOffset < 600 && window.pageYOffset >= 0) {
    console.log("test");
    document.getElementById("uparrow").style.opacity = 0;
    document.getElementById("topleftline").style.opacity = 0;
    document.getElementById("toprightline").style.opacity = 0;
    document.getElementById("bottomline").style.opacity = 0;
    updatelist("white");
  }
  //page-2
  if (window.pageYOffset < 1300 && window.pageYOffset > 700) {
    document.getElementById("uparrow").style.opacity = 100;
    document.getElementById("topleftline").style.opacity = 100;
    document.getElementById("toprightline").style.opacity = 100;
    document.getElementById("bottomline").style.opacity = 100;
    updatelist("black");
    topleftline.classList.toggle("fade");
    toprightline.classList.toggle("fade");
    bottomline.classList.toggle("fade");
  }
  //page-3
  if (window.pageYOffset > 1300 && window.pageYOffset < 2500) {
    updatelist("white");
    document.getElementById("topleftline").style.opacity = 0;
    document.getElementById("toprightline").style.opacity = 0;
    document.getElementById("bottomline").style.opacity = 0;
  }
};

function updatelist(params) {
  document.getElementById("svg1").style.fill = params;
  document.getElementById("svg2").style.fill = params;
  document.getElementById("svg3").style.fill = params;
  document.getElementById("svg4").style.fill = params;
  document.getElementById("svg5").style.fill = params;
  document.getElementById("svg6").style.fill = params;
  document.getElementById("svg7").style.fill = params;
  document.getElementById("svg8").style.fill = params;
  document.getElementById("svg9").style.fill = params;
  document.getElementById("sidenavtxt1").style.color = params;
  document.getElementById("sidenavtxt2").style.color = params;
  document.getElementById("sidenavtxt3").style.color = params;
  document.getElementById("sidenavtxt4").style.color = params;
  document.getElementById("sidenavtxt5").style.color = params;
  document.getElementById("sidenavtxt6").style.color = params;
  document.getElementById("sidenavtxt7").style.color = params;
  document.getElementById("sidenavtxt8").style.color = params;
  document.getElementById("sidenavtxt9").style.color = params;
}

// window.addEventListener("scroll", function() {
// var top = document.documentElement.scrollTop || document.body.scrollTop;
// console.log(top);
// });
// 查看監聽

window.onscroll = function() {
    scrollFunction();
}; 
//每當畫面捲動觸發一次

function scrollFunction() {
  if (
document.body.scrollTop > 1000 ||
document.documentElement.scrollTop > 1000
) {
    document.getElementById("myBut").style.display = "block";
} else {
    document.getElementById("myBut").style.display = "none";
}
}

var currentPosition, timer;
function GoTop() {
    timer = setInterval("runToTop()", 1);
}
function runToTop() {
currentPosition =
document.documentElement.scrollTop || document.body.scrollTop;
currentPosition -= 10;
if (currentPosition > 0) {
    window.scrollTo(0, currentPosition);
} else {
    window.scrollTo(0, 0);
    clearInterval(timer);
}
}

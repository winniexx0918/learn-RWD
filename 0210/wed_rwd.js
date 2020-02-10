var slideshow = document.getElementById('sideshow')
var slides = slideshow.getElementsByTagName('img');
var index = 0;
// 自動播放
// var slideInterval = setInterval(nextSlide,5000);
function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

var slideTextShow = document.getElementById('slideShowText')
var slideTexts = slideTextShow.getElementsByTagName('article');
var i = 0;
// 自動播放
// var slideInterval = setInterval(nextText,5000);
function nextText() {
    slideTexts[i].classList.remove('active');
    i = (i + 1) % slideTexts.length;
    slideTexts[i].classList.add('active');
}

function prevText() {
    slideTexts[i].classList.remove('active');
    i = (i - 1 + slideTexts.length) % slideTexts.length;
    slideTexts[i].classList.add('active');
}
// 漢堡選單
function butFun() {
    var menu = document.getElementById('myMenu');
    menu.classList.toggle("navStyle");
}
function butFun1(){
    var con =document.getElementById('all');
    con.classList.toggle("conStyle")  }


var slideshow = document.getElementById("slideshowImg");

var slideshowSrc = ["./images/barber.jpg", "./images/shave.jpg", "./images/skateboard.jpg", "./images/graff.jpg", "./images/bape.jpg"]
var curIndex = 0;

function slideShow() {
    slideshow.src = slideshowSrc[curIndex];
    curIndex++;
    if (curIndex == slideshowSrc.length) { curIndex = 0; }
    setTimeout("slideShow()", 1000);
}
slideShow();

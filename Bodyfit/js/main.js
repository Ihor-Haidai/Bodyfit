var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
  dots[slideIndex-1].className += " active";
}
var slids = document.getElementsByClassName("slids");
var index = 4;
var pre = 0;
slids[index - 4].style.display = "flex";
slids[index - 3].style.display = "flex";
slids[index - 2].style.display = "flex";
slids[index - 1].style.display = "flex";
function nextSlids() {
    if(index < 8) {
        slids[pre].style.display = "none";
        slids[index].style.display = "flex";
        pre++;
        index++;
        console.log(pre);
        console.log(index);
    }
}
function prevSlids() {
    if(index > 4) {
        pre--;
        index--;
        slids[pre].style.display = "flex";
        slids[index].style.display = "none";
    }
}
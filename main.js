let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) { 
        slideIndex=slides.length 
    } 
    for (i=0; i < slides.length; i++) { 
        slides[i].style.display="none" ; 
    }
    for (i=0; i < dots.length; i++) { 
        dots[i].className=dots[i].className.replace(" active", "" ); 
    }
    slides[slideIndex - 1].style.display="block"; 
    dots[slideIndex - 1].className +=" active";
}

let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')

nextBtn.addEventListener('click', function(){
    plusSlides(-1)
});
prevBtn.addEventListener('click', function(){
    plusSlides(1)
});

let dot1Btn = document.getElementById('dot1')
let dot2Btn = document.getElementById('dot2')
let dot3Btn = document.getElementById('dot3')

dot1Btn.addEventListener('click', function(){
    currentSlide(1)
});
dot2Btn.addEventListener('click', function(){
    currentSlide(2)
});
dot3Btn.addEventListener('click', function(){
    currentSlide(3)
});
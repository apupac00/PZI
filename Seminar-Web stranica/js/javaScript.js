/* ------------SlideShow-------------- */
let slideIndex = 0;

const showSlides = () =>{
    /* Dobavljanje elemenata pomoću njihovih klasa */
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    //For petlja koja prolazi kroz sve slajdove
    for(let i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;
    //Uvjetno granje koje gleda jeli Index slajda veci od duzine slajdova
    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex -1].className += " active";
    /* Svako 5s mjenja slajd */
    setTimeout( showSlides, 5000);
};

//Kad sve ovo ponovno poziva arrow funckiju i mjenja se iduci slajd
showSlides(slideIndex);

//Funkcija koja mjenja slajd
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//Funckija koja pokazije trenutni slajd
function currentSlide(n) {
    showSlides(slideIndex = n);
}

showSlides();


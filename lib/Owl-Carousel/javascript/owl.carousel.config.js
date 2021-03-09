//Start Owl Carousel
const owl = $('.owl-carousel');
owl.owlCarousel({
    loop:false,
    margin:15,
    nav:false,
    dots:false,
    autoWidth:true
});



const carouselSection = Array.from(owl);
carouselSection.shift();

for(let i = 0;i<catalogSection.length;i++){
	navigatePrev[i].addEventListener("click", ()=>{
        owl.trigger("prev.owl.carousel");
    });
    navigateNext[i].addEventListener("click", ()=>{
        owl.trigger("next.owl.carousel");
    });     
}
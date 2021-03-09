//Header
let screenSizeWidth = window.screen.width;

selectCssFile();
window.addEventListener("resize", ()=>{
    setTimeout(selectCssFile(), 200);
});

function selectCssFile(){
    screenSizeWidth = window.screen.width;
    if(screenSizeWidth <= 800){
        const link = document.getElementsByTagName("link")[2];
        link.setAttribute("rel", "stylesheet");

        if(link.getAttribute("href") != "./style.mobile.screenSize.css"){
            link.setAttribute("href", "./style.mobile.screenSize.css");
            console.log("mobile")
        }
    }else{
        const link = document.getElementsByTagName("link")[2];
        link.setAttribute("rel", "stylesheet");

        if(link.getAttribute("href") != "style.css"){
            link.setAttribute("href", "style.css");
            console.log("mobile")
        }
    }
};

let lastScrollValue = screenSizeWidth < 800 ? 150 : 160;
window.addEventListener("scroll", ()=>{
    const menu = document.querySelector(".header");
    let scroll = window.pageYOffset;

    if(scroll > lastScrollValue){
        const menuHeaderTop = document.querySelector(".menu-header");
        if(menu.offsetHeight === 80){
            menu.style.backgroundColor =  `rgba(0,0,0,.9)`;
        }else{
            menu.style.top = screenSizeWidth < 1020 ? "-150px" : "-80px";
            menu.style.backgroundColor =  `rgba(0,0,0,.9)`;
        }
    }else if(scroll < lastScrollValue){
        if(scroll <= 80){
            menu.style.top = "0px";
            menu.style.backgroundColor =  `rgba(0,0,0,0)`;
        }else{
            menu.style.top = "0px";
            menu.style.backgroundColor =  `rgba(0,0,0,.9)`;
        }
        
    }
    lastScrollValue = scroll;
});


//Navigate buttons config
const catalogSection = Array.from(document.querySelectorAll(".catalog-section"));
catalogSection.shift();
const navigatePrev = document.querySelectorAll(".prev");
const navigateNext = document.querySelectorAll(".next");

for(let i = 0;i<catalogSection.length;i++){
    catalogSection[i].addEventListener("mouseover", ()=>{
        navigatePrev[i].style.opacity = "1";
        navigateNext[i].style.opacity = "1";
    });
    catalogSection[i].addEventListener("mouseout", ()=>{
        navigatePrev[i].style.opacity = "0";
        navigateNext[i].style.opacity = "0";
    }); 
}
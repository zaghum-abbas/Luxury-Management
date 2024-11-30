window.addEventListener('scroll', function(){
    let header = document.getElementById('header');
    if(this.window.pageYOffset > 10){
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');
    }
});


let menu = document.getElementById("toggle-menu");
let menuBtn = document.getElementById("call-menu");

menuBtn.addEventListener('click', function (){
    menuBtn.classList.toggle('menu-active');
    menu.classList.toggle('active');

});


function handleMobileView() {
    const menu = document.getElementById("toggle-menu");
    const button = document.getElementById("interest-button");
    if (window.innerWidth <= 1024) {
        setTimeout(()=>{
            menu.appendChild(button);
            button.classList.remove("d-none");
        }, 2000);

    }
}
// window.addEventListener("resize", handleMobileView);
window.addEventListener("load", handleMobileView);



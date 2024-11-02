let myButton = document.querySelector(".up");

window.onscroll = function(){

    if(scrollY >= 100){
        myButton.classList.add("show");
        }else{
            myButton.classList.remove("show");
        }

}

myButton.addEventListener ("click" , function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
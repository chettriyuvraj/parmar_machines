window.addEventListener("DOMContentLoaded",()=>{

    elem = document.querySelector("#navbar")
    elem.scrollIntoView({ behavior: 'smooth' });

    setTimeout(()=>{
        elem2 = document.querySelector(".contact_form");
        elem2.scrollIntoView({ behavior: 'smooth' });

    },2000);
   

});
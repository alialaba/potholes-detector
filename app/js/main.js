const  navToggle= document.querySelector(".hamburger");
const navbar = document.querySelector(".nav");

const menuToggle =()=>{

 // toggle aria-expanded if navbar has property of data visible
 navbar.hasAttribute("data-visible") ?
   navToggle.setAttribute("aria-expanded", false) :
   navToggle.setAttribute("aria-expanded", true);
   
 navbar.toggleAttribute("data-visible");
 navToggle.classList.toggle("active")
 
}

navToggle.addEventListener("click", menuToggle)




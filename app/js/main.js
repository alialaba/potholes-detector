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


//implement range input review
const feedbackInput = document.getElementById("feedback-input");
const feedbackText = document.getElementById("feedback-text");
const feedbackEmoji = document.getElementById("feedback-emoji");

function updateChange(){
  
  let feedbackInputValue = feedbackInput.value;
  console.log(feedbackInputValue);
  
  switch(parseInt(feedbackInputValue)){
    case 10:
      feedbackText.innerText = "Good";
      feedbackEmoji.innerText = "😐"
      break;
    case 15:
      feedbackText.innerText = "Awesome";
      feedbackEmoji.innerText = "😄"
      break;
    case 20:
      feedbackText.innerText = "Better";
      feedbackEmoji.innerText = "🥰"
      break;
    case 25:
      feedbackText.innerText = "Well done";
      feedbackEmoji.innerText = "😍";
      break;
    case 30:
      feedbackText.innerText = "Bravo";
      feedbackEmoji.innerText = "🎉";
      break;
    case 35:
      feedbackText.innerText = "Superb";
      feedbackEmoji.innerText = "✨";
      break;
    case 40:
      feedbackText.innerText = "Exceptional";
      feedbackEmoji.innerText = "💯";
      break;

  }
}


feedbackInput.addEventListener("input", updateChange);


const showcaseCancel = document.querySelector(".showcase__cancel");
const showcaseFeedback = document.querySelector(".showcase__feedback");
const showcaseDisplay = document.querySelector(".showcase__display");

//Event 
showcaseFeedback.addEventListener("click", ()=>{

  //target mobile 
  if(window.matchMedia('(max-width: 540px)').matches){
    showcaseDisplay.removeChild(showcaseFeedback);
  }
})






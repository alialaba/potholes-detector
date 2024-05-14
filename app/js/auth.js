const url = "http://localhost:3000/signup";
const formField = document.getElementById("signup-form");
// const inputEl = document.querySelectorAll("input");
// console.log(inputEl)



//create signup form logic 

const createSignUpForm = (event)=>{
//Prevent default submit
  event.preventDefault();

//Get username and password value
let usernameVal = document.getElementById("username").value;
let psdVal = document.getElementById("password").value;
let confirmPsdVal = document.getElementById("confirm-password").value;


//data structure of vals
let formData ={
  username: usernameVal,
  password: psdVal,
  confirmPassword: confirmPsdVal,
  admin: false
}

//Perform validation 
const usernameErrMsg = document.getElementById("username-error-msg");

if(formData.username  === " " ){
  // console.log("please fill the field")
  usernameErrMsg.textContent = "please fill the field";
  // errMsgEl.style.display ="block"
  // inputEl.style.border = "1px red solid "

}

// if(formData.password !== formData.confirmPassword){
//   console.log("those not match")
// }

}




// Event listener for form submission

formField.addEventListener("submit", createSignUpForm)







 // Handle successful response
        
// Optionally, redirect or perform other actions after successful signup



const url = "http://localhost:3000/signup";
const formField = document.getElementById("signup-form");



//create signup form logic 

const createSignUp = async (event)=>{
    //Prevent default submit
    event.preventDefault();

    //Get username and password value
  let usernameVal = document.getElementById("username").value.trim();
  let psdVal = document.getElementById("password").value.trim();

  //data structure of vals

  let formData = {
    username: usernameVal,
    password: psdVal,
    admin: false
  }


  let res = await fetch(url, {
    method: "POST",
    headers: {
        "Content-type" : "application/json"
    },
    body: JSON.stringify(formData)

  })

  if(res.ok){
    let data = await res.json();
    console.log(data)
  }

}
formField.addEventListener("submit" , createSignUp)

//Prevent default submit

//Get username and password value

//data structure of vals


//Perform validation 


 // Handle successful response
        
// Optionally, redirect or perform other actions after successful signup

// Event listener for form submission


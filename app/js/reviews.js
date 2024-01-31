import { reviews } from "./data.js";
//Select parent element
const reviewList = document.getElementById("review__list");
// console.log(reviewList);


function showReviews (item){

    //Assign Elements
    let reviewItem = document.createElement("li");
    let reviewCard = document.createElement("article");
    let reviewMsg = document.createElement("p");
    let reviewFooter = document.createElement("div");
    let reviewAvatar = document.createElement("div");
    let reviewImg = document.createElement("img");
    let reviewInfo = document.createElement("p");
    let reviewName = document.createElement("span");
    let reviewCareer = document.createElement("span");




    //Assign data to Element value
     reviewMsg.textContent = item.message;

 
    //Append Elements to children
    reviewInfo.appendChild(reviewCareer)
    reviewInfo.appendChild(reviewName)
    reviewAvatar.appendChild(reviewImg)
    reviewFooter.appendChild(reviewAvatar)
    reviewFooter.appendChild(reviewInfo)
    reviewCard.appendChild(reviewMsg)
    reviewCard.appendChild(reviewFooter)
    reviewItem.appendChild(reviewCard)
    reviewList.appendChild(reviewItem);

   
}

// console.log(reviews)
reviews.forEach((item)=> showReviews(item))
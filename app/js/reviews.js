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
    let reviewAvatarBorder = document.createElement("div")
    let reviewInfo = document.createElement("p");
    let reviewName = document.createElement("span");
    let reviewCareer = document.createElement("span");
    let reviewBlockquote = document.createElement("blockquote");





    //Assign data to Element value
     reviewMsg.textContent = item.message;
     reviewName.textContent = item.name;
     reviewCareer.textContent = item.career;
     reviewImg.src = item.imgSrc;


    //Assign classnames;    
    reviewItem.className = "review__item";
    reviewCard.className = "review__card";
    reviewMsg.className ="review__message";
    reviewAvatar.className = "review__avatar";
    reviewFooter.className = "review__footer";
    reviewInfo.className = "review__info";
    reviewImg.className = "review__img";
    reviewAvatarBorder.className ="review__avatar-border"
 
    //Append Elements to children
    reviewInfo.appendChild(reviewCareer);
    reviewInfo.appendChild(reviewName);
    reviewAvatar.appendChild(reviewAvatarBorder)
    reviewAvatar.appendChild(reviewImg);

    reviewFooter.appendChild(reviewAvatar);

    reviewFooter.appendChild(reviewInfo);
    reviewBlockquote.appendChild(reviewMsg);
    reviewCard.appendChild(reviewBlockquote);
    reviewCard.appendChild(reviewFooter);
    reviewItem.appendChild(reviewCard);
    reviewList.appendChild(reviewItem);

   
}

// console.log(reviews)
reviews.forEach((item)=> showReviews(item))
import { reviews, questions } from "./data.js";
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


/*********************/
/*Show FAQ */
/*********************/

//Select parent element
const accordionList = document.getElementById("accordion__list");

function showFAQ(item){
    // console.log(item);
    //Create item elements
    const accordionItem = document.createElement("li");
    const accordionHeader = document.createElement("div");
    const accordionHeading = document.createElement("h3");
    const accordionIcon = document.createElement("span");
    const accordionContent = document.createElement("div");
    const accordionParagraph = document.createElement("p");

    //ClassName for element created
    accordionItem.classList = "accordion__item";
    accordionHeader.classList = "accordion__header";
    accordionHeading.classList = "accordion__heading";
    accordionIcon.classList = "accordion__icon", "accordion__icon--toggle";
    accordionContent.classList = "accordion__content" ;
    accordionParagraph.classList = "accordion__paragraph";


    //
    accordionHeading.textContent = item.title;
    accordionParagraph.textContent = item.info;
    accordionIcon.innerText = "+";


    //Append Elements child
    accordionHeader.appendChild(accordionHeading);
    accordionHeader.appendChild(accordionIcon);
    accordionItem.appendChild(accordionHeader);
    accordionContent.appendChild(accordionParagraph);
    accordionItem.appendChild(accordionContent);
    accordionList.appendChild(accordionItem);

}


   
questions.map((item)=> showFAQ(item));
reviews.map((item)=> showReviews(item));


//Toggle to hide and show FAQs
const accordionItems = document.getElementsByClassName("accordion__item");
console.log(accordionItems)
//loop through it items
for(let i = 0; i < accordionItems.length; i++){
    let accordionItem = accordionItems[i];

    accordionItem.addEventListener("click", function(){
        this.classList.toggle("active")
        // accordionIcon.textContent = "-"
    })
}



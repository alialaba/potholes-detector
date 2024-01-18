import { timeline } from "./data.js";


//Select Elements
const usersTweets = document.querySelector(".experience__tweets");
let experienceMessage = document.querySelector(".experience__message");
let tweetUsername = document.querySelector(".twitter-user__name");
let tweetHandle = document.querySelector(".twitter-user__handle");
let tweetAvatar = document.querySelector(".twitter-user__avater");



function displayUsersTweet(item, isFirstTweet){
const userTweeter = document.createElement("article");
let  userTweetOverlay  = document.createElement("div")
const userTweet = document.createElement("div");
const userTweetHeader = document.createElement("div");
const userTweetwrapCol = document.createElement("div")
const userTweetHeaderAvatar = document.createElement("div");
const userTweetwrapText = document.createElement("div");
const userTweetName = document.createElement("p");
const userTweetHandle = document.createElement("span")
const userTweetIcon = document.createElement("i");
const userTweetMessage = document.createElement("p");


//ClassNames
userTweeter.className ="tweet";
userTweet.className ="tweet__user"
userTweetHeader.className = "tweet__header";
userTweetHeaderAvatar.className = "tweet__avater";
userTweetwrapCol.className = "tweet__col-left";
userTweetOverlay.className = "tweet__overlay";
userTweetName.className ="tweet__username";
userTweetHandle.className ="tweet__handle";
userTweetMessage.className ="tweet__text";


// Add event listener to userTweetOverlay
userTweetOverlay.addEventListener("click", (event)=>{

    //target clicked element
    const clickedTweet = event.target;
    if(clickedTweet){
        
        experienceMessage.textContent = item.message.length > 140 ? `${item.message.substring(0, 140)}...` : item.message

        tweetUsername.textContent = item.name;
        tweetHandle.textContent = item.handle;
        tweetAvatar.style.backgroundColor = item.color;
        

    }

    

})

//Add content
userTweetName.textContent = item.name;
userTweetHandle.textContent = item.handle;
console.log(item.message.length )
 userTweetMessage.textContent = item.message.length > 95 ?  `${item.message.substring(0,95)}...` : item.message;
userTweetIcon.classList.add("fa-brands", "fa-twitter");
//generate Color for avatars
userTweetHeaderAvatar.style.backgroundColor = item.color;

// console.log(userTweeter)
//Append to parent
usersTweets.appendChild(userTweeter);
userTweeter.appendChild(userTweetOverlay);
userTweeter.appendChild(userTweet);
userTweet.appendChild(userTweetHeader)
userTweetHeader.appendChild(userTweetwrapCol)
userTweetwrapCol.appendChild(userTweetHeaderAvatar);
userTweetwrapCol.appendChild(userTweetwrapText)
userTweetHeader.appendChild(userTweetIcon)
userTweetwrapText.appendChild(userTweetName)
userTweetwrapText.appendChild(userTweetHandle);
userTweetHeader.appendChild(userTweetIcon);
userTweet.appendChild(userTweetMessage)

// If it's the first tweet, display its content in experience__preview initially

if(isFirstTweet){
     experienceMessage.textContent = item.message.length > 140 ? `${item.message.substring(0, 140)}...` : item.message
    tweetUsername.textContent = item.name;
    tweetHandle.textContent = item.handle;
    tweetAvatar.style.backgroundColor = item.color;
}

}


// iterate over timeline array
timeline.forEach((item, index)=> {
    var isFirstTweet = index === 0;
    
    displayUsersTweet(item, isFirstTweet);
})




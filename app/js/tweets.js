import { timeline } from "./data.js";

const usersTweets = document.querySelector(".experience__tweets");


//generate Colors 
function generateColor(){
    let hexcodes = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hexcodes[Math.floor(Math.random() * 16)]
    }
    return color;
}


function displayUsersTweet(item){
const userTweeter = document.createElement("article");
const userTweetOverlay  = document.createElement("div")
const userTweet = document.createElement("div");
const userTweetHeader = document.createElement("div");
const userTweetwrapCol = document.createElement("div")
const userTweetHeaderAvatar = document.createElement("div");
const userTweetwrapText = document.createElement("div");
const userTweetName = document.createElement("p");
const userTweetHandle = document.createElement("span")
const userTweetIcon = document.createElement("i");
const userTweetMessage = document.createElement("p");
// console.log(timeline)

//ClassNames
userTweeter.className ="experience__tweet";
userTweet.className ="tweet__user"
userTweetHeader.className = "tweet__header";
userTweetHeaderAvatar.className = "tweet__avater";
userTweetwrapCol.className = "tweet__col-left";
userTweetOverlay.className = "experience__tweet-overlay"

//Add content
userTweetName.textContent = item.name;
userTweetHandle.textContent = item.handle;
userTweetMessage.textContent = item.message;
userTweetIcon.classList.add("fa-brands", "fa-twitter");
//generate Color for avatars
userTweetHeaderAvatar.style.backgroundColor = generateColor();

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


}

timeline.forEach((item)=> displayUsersTweet(item))
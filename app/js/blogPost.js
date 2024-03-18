const post = document.querySelector(".post");


const url = "http://localhost:3000/blogs/";

//Get Blog detail
const getBlogData = async ()=>{
    //query string of the current URL
   const query = new URLSearchParams(window.location.search);
   const param = Object.fromEntries(query.entries());

   const res = await fetch(url + param.id);
   const data = await res.json();

   //insert elements to parent
   post.innerHTML = 
   `
   <h2 class="post__title">${data.title}</h2>
   <header class="post__list">
   <div>
    <span>${data.read_time} read</span>
   </div>

   <div>
    
   </div>
   
   </header>
   <img src=${data.img_url}/>
   
     <p class="post__content">${data.content}</p>

   
   `

}

getBlogData();

// const getData = async ()=>{
//     const query = new URLSearchParams(window.location.search);
//     console.log(query)
//     const parameter= Object.fromEntries(query.entries());

//     console.log(parameter)

//     const res = await fetch(url + parameter.id);
//     const data = await res.json();
//     console.log(data)
//     post.innerHTML =
//     `
//     <h2>${data.title}</h2>
//     <img src=${data.img_url}/>
//     <p>${data.content}</p>

//     `
// }

// getData()
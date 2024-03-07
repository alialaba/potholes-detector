const blogsEl = document.querySelector(".blog__posts");


const url =  "http://localhost:3000/blogs";
async  function getBlogs  (){

}

const p = new Promise((resolve, reject)=>{
    let isTrue = true;
    if(isTrue){
        resolve("Success");
    }else{
        reject("Error");
    }
})

p.then(message =>(console.log("Promise Resolved")))
.catch(message =>(console.log("Promise Rejected")))
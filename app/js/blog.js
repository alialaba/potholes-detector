const blogsEl = document.querySelector(".blog__posts");
const url =  "http://localhost:3000/blogs";


//Make Api call
async function getBlogs (){
    try {
        const res = await fetch(url);
        const data = await res.json();
        showBlog(data);
    } catch (error) {
        console.log(error);
    }
}

getBlogs();

//show blog logic
const showBlog = (blogsData)=>{

    //featured blog
    const featuredBlog = blogsData[0]

    //other blogs
    const otherBlogs = blogsData.slice(1);


     //didplay featured blog
     displayBlog(featuredBlog, true);



     //display other blogs
     otherBlogs.forEach(blog => displayBlog(blog, false))
    

}



const displayBlog = (blog, isFeatured)=>{

    //Create element for blog
    const blogEl = document.createElement("div");
    blogEl.classList.add("blog__column");


    blogEl.innerHTML = `
    
    <img src=${blog.img_url} alt=${blog.img_url}/>
                <h3 class="blog__heading">${blog.title}</h3>
                <p class="blog__post-content">${blog.content}</p>
               <div class="blog__tags">
                <span class="blog__tag blog__tag-author ">${blog.author}</span>
                <span class="blog__tag blog__tag-read-time">${blog.read_time}</span>
               </div>
               <a class="btn btn-bg" href="blogPost.html?id=${blog.id}">Read more</a>
    `

    //Append child element
    const parentEl = isFeatured ? document.querySelector(".blog__featured") : document.querySelector(".blog__recent");
    parentEl.appendChild(blogEl)
}
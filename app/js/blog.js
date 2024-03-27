const blogsEl = document.querySelector(".blog__posts");
const url = "http://localhost:3000/blogs";

//Make Api call
async function getDatas() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    showBlog(data);
  } catch (error) {
    console.log(error);
  }
}

getDatas();

//show blog logic
const showBlog = (blogsData) => {
  //featured blog
  const featuredBlog = blogsData[0];

  //other blogs
  const otherBlogs = blogsData.slice(1);

  //didplay featured blog
  displayBlog(featuredBlog, true);

  //display other blogs
  otherBlogs.forEach((blog) => displayBlog(blog, false));
};

const displayBlog = (blog, isFeatured) => {
  //Create element for blog
  const ftBlogEl = document.createElement("div");
  const recentBlogEl = document.createElement("div");

  ftBlogEl.classList.add("blog__ft--col");
  recentBlogEl.classList.add("blog__column");

  ftBlogEl.innerHTML = `
    <div>
    <img src=${blog.img_url} alt=${blog.img_url}/>
    </div>
    
     <div class="blog__ft--inner">
                <h3 class="blog__heading">${blog.title}</h3>
                <p class="blog__post-content">${blog.content}</p>
               <div class="blog__tags">
                <span class="blog__tag blog__tag-author ">${blog.author}</span>
                <span class="blog__tag blog__tag-read-time">${blog.read_time}</span>
               </div>
               <a class="btn btn-bg" href="blogPost.html?id=${blog.id}">Read more</a>
     </div>
    `;
  recentBlogEl.innerHTML = `
    
    <img src=${blog.img_url} alt=${blog.img_url}/>
    
                <h3 class="blog__heading">${blog.title}</h3>
                <p class="blog__post-content">${blog.content}</p>
               <div class="blog__tags">
                <span class="blog__tag blog__tag-author ">${blog.author}</span>
                <span class="blog__tag blog__tag-read-time">${blog.read_time}</span>
               </div>
               <a class="btn btn-bg" href="blogPost.html?id=${blog.id}">Read more</a>
    `;

  //Append child element
  if (isFeatured) {
    let parentEl = document.querySelector(".blog__featured");
    parentEl.appendChild(ftBlogEl);
  } else {
    let parentEl = document.querySelector(".blog__row");
    parentEl.appendChild(recentBlogEl);
  }
};

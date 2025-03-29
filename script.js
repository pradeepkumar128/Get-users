const userDataContainer = document.getElementById("user-data");
const loadMore = document.getElementById('load-more');

let limit = 5;
let skip = 0

const fetchPosts = () =>{

  let limit = 10;
  const apiURL = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      data.posts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
            <div class="post-header">
                        <i class="fa-solid fa-user user-icon"></i>
                        <span class="user-id">User${post.userId}</span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-body">${post.body}</p>
                    <div class="post-tags">
                        <span class="tag">${post.tags}</span>
                    </div>
                    <div class="post-footer">
                        <div class="likes">
                            <i class="fa-solid fa-thumbs-up"></i> 
                            ${post.reactions.likes}
                        </div>
                        <div class="dislikes">
                            <i class="fa-solid fa-thumbs-down"></i>
                            ${post.reactions.dislikes}
                        </div>
                        <div class="views">
                            <i class="fa-solid fa-eye"></i>
                            ${post.views} 
                        </div>
                    </div>
            `;
        userDataContainer.appendChild(postCard);

      });
      skip += limit;
    })
    .catch((error) => console.log(error));
};
document.addEventListener("DOMContentLoaded",fetchPosts);
loadMore.addEventListener("click",fetchPosts);

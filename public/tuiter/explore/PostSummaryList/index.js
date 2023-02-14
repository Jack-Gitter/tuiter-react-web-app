import posts from "./post.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {

  return(`
  <div class="card mt-2 position-relative mb-4">
    <img class="card-img-top" src="starship.webp">
  ${posts.map(post => PostSummaryItem(post)).join("")}
  </div>
  `)

}

export default PostSummaryList;
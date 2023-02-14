import posts from "./post.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {

  return(`
  <div class="card mt-2 mb-4">
    <div class="position-relative">
    <img class="card-img-top" src="starship.webp">
    <span class="image-text">SpaceX Lanuch</span>
    </div>
  ${posts.map(post => PostSummaryItem(post)).join("")}
  </div>
  `)

}

export default PostSummaryList;
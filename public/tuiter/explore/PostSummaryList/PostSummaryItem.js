const PostSummaryItem = (post) => {

  let topic = post.topic
  let userName = post.userName;
  let time = post.time;
  let image = post.image;
  let title = post.title;

  return(`
  <div class="card-body position-relative">
    <span class="text-secondary">${topic}</span>
    <img class="image-responsive float-right tweet-img ms-2" src=${image}>
    <br>
    <span class="font-weight-bold"><b>${userName}</b></span>
    <i class="fa-solid fa-circle-check"></i>
    <span class="text-secondary"> - ${time}</span>
    <br>
    <span><b>${title}</b></span>
  </div>
  <hr class="text-secondary m-0 p-0">
 `);
}
export default PostSummaryItem;

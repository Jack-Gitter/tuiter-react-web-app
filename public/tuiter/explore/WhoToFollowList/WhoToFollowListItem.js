const WhoToFollowListItem = (who) => {
  let avatarIcon = who.avatarIcon;
  let userName = who.userName;
  let handle = who.handle;

  return(`
  <li class="list-group-item p-0">
    <button class="float-right btn text-white me-2 bg-primary border border-rounded follow-button box-shadow-remove">Follow</button>
    <img class="image-responsive me-2 ms-2 follow-image border rounded-circle border-white float-left mt-1 mb-1" src=${avatarIcon}/>
    <div class="mt-2 mb-1">
      <b>${userName}</b>
      <i class="fa-solid fa-circle-check"></i>
      <br>
      <span>${handle}</span>
    </div>
   </li>
 `);
}
export default WhoToFollowListItem;

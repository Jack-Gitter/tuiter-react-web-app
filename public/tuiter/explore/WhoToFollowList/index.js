import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {

  return(`
  <ul class="list-group">
    <li class="list-group-item font-size-sm"><b>Who to Follow</b></li>
    ${who.map(company => WhoToFollowListItem(company)).join("")}
  </ul>
 `);
}
export default WhoToFollowList;

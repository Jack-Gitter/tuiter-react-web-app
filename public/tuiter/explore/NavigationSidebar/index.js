const NavigationSidebar = () => {
  return(`
   <div class="list-group">
    <a class="list-group-item" href="#">
    <i class="fab fa-twitter"></i></a>
    <a class="list-group-item list-group-item-action" href="#"><i class=" fa-solid fa-house me-2"></i><span class="d-none d-xl-inline">Home</span></a>
    <a class="list-group-item list-group-item-action active" href="#"><i class="fa-solid fa-hashtag me-2"></i><span class="d-none d-xl-inline">Explore</span></a>
    <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-bell me-2"></i><span class="d-none d-xl-inline">Notifications</span></a>
    <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-envelope me-2"></i><span class="d-none d-xl-inline">Messages</span></a>
    <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-bookmark me-2"></i><span class="d-none d-xl-inline">Bookmarks</span></a>
    <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-list-ul me-2"></i><span class="d-none d-xl-inline">Lists</span></a>
    <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-eser me-2"></i><span class="d-none d-xl-inline">Profile</span></a>
    <a class="list-group-item list-group-item-action" href="#"><i class="fa-solid fa-circle-info me-2"></i><span class="d-none d-xl-inline">More</span></a>
   </div>
   <div class="d-grid mt-2">
    <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;
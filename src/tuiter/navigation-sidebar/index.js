import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <>
      <div className="list-group">
        <a className="list-group-item" href="/tuiter">
          <i className="fa fa-twitter"></i></a>
        <a className={`list-group-item list-group-item-action ${active === 'home' ? 'active': ''}`}><i
            className="fa fa-solid fa-arrow-right me-2"></i><span
            className="d-none d-xl-inline">Home</span></a>
        <a className={`list-group-item list-group-item-action ${active === 'explore' ? 'active': ''}`}><i
            className="fa fa-solid fa-hashtag me-2"></i><span
            className="d-none d-xl-inline">Explore</span></a>
        <a className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active': ''}`}><i
            className="fa fa-solid fa-bell me-2"></i><span
            className="d-none d-xl-inline">Notifications</span></a>
        <a className={`list-group-item list-group-item-action ${active === 'messages' ? 'active': ''}`}><i
            className="fa fa-solid fa-envelope me-2"></i><span
            className="d-none d-xl-inline">Messages</span></a>
        <a className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active': ''}`} ><i
            className="fa fa-solid fa-bookmark me-2"></i><span
            className="d-none d-xl-inline">Bookmarks</span></a>
        <a className={`list-group-item list-group-item-action ${active === 'lists' ? 'active': ''}`} ><i
            className="fa fa-solid fa-list-ul me-2"></i><span
            className="d-none d-xl-inline">Lists</span></a>
        <a className={`list-group-item list-group-item-action ${active === 'profile' ? 'active': ''}`} ><i
            className="fa fa-solid fa-user me-2"></i><span
            className="d-none d-xl-inline">Profile</span></a>
        <a className={`list-group-item list-group-item-action ${active === 'more' ? 'active': ''}`}><i
            className="fa fa-solid fa-caret-up me-2"></i><span
            className="d-none d-xl-inline">More</span></a>
      </div>
  <div className="d-grid mt-2">
    <a className="btn btn-primary btn-block rounded-pill">Tweet</a>
  </div>
        </>
  );
};
export default NavigationSidebar;
import React from "react";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
  return(
   <div>
     <Nav/>
     <h1>Tuiter</h1>
   </div>
  );
}

export default Tuiter;
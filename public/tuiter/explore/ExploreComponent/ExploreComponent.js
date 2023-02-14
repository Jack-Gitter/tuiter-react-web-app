import PostSummaryList from "../PostSummaryList/index.js"

const ExploreComponent = () => {

  return(`

    <div class="row">
        <div class="col col-11">
        <span class="input-group">
        <span class="input-group-text border-right-0 border-rounded border-color bg-white"><i class="c-black fa-solid fa-magnifying-glass"></i></span>
        
        <input class="form-control border border-start-0 box-shadow-remove border-color border-rounded" placeholder="Search Tuiter"></input>
         </span>
        </div>
        <div class="col col-1">
          <i href="#" class="fa-solid fa-gear fa-2x text-primary mt-1"></i>
        </div>
      </div>
      
      <div>
        <ul class="nav nav-pills mt-2 position-relative move-to-front">
          <li class="nav-item"> <a class="nav-link selected-border text-secondary" href="#">For You</a></li>
          <li class="nav-item"> <a class="nav-link" href="#">Trending</a></li>
          <li class="nav-item"> <a class="nav-link" href="#">News</a></li>
          <li class="nav-item"> <a class="nav-link" href="#">Sports</a></li>
          <li class="nav-item d-none d-md-inline"> <a class="nav-link" href="#">Entertainment</a></li>
        </ul>
      </div>
      
      ${PostSummaryList()}
  `)
}

export default ExploreComponent;
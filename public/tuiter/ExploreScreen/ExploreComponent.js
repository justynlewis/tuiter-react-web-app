import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="wd-main-content">

            <div class="row wd-main-top-section">
                <div class="col-11 position-relative">
                    <i class="fa-solid fa-magnifying-glass fa-sm position-absolute start-0 ms-4 mt-3 pt-1"></i>
                    <input type="text"
                               class="form-control wd-searchbar rounded-pill ps-5 mb-2"
                               placeholder="Search Twitter">
                </div>
                <div class="col-1 p-0 mt-1">
                    <i class="fa-solid fa-gear fa-xl "></i>
                </div>
            </div>


                <ul class="nav nav-tabs border-bottom-">
                    <li class="nav-item p-0">
                        <a class="nav-link active p-2 ps-3 pe-3" href="for-you.html">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-2 ps-3 pe-3" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-2 ps-3 pe-3" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-2 ps-3 pe-3" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-2 ps-3 pe-3 d-sm-none d-md-flex" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
                
            <div class="wd-main-image-area position-relative">
                <img class="wd-main-image w-100 mt-1 position-relative" src="../images/starship.jpg" alt="starship.jpg">
                <h2 class="text-light ms-2 position-absolute bottom-0 fw-bold">SpaceX's Starship</h2>
            </div>
            
           ${PostSummaryList()}
           
           
           </div>
    `);
}
export default ExploreComponent;

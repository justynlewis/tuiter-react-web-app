import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return(
            <div className="wd-main-content">

                <div className="row wd-main-top-section">
                    <div className="col-11 position-relative">
                        <i className="fa-solid fa-magnifying-glass fa-sm position-absolute start-0 ms-4 mt-3 pt-1"></i>
                        <input type="text"
                               className="form-control wd-searchbar rounded-pill ps-5 mb-2"
                               placeholder="Search Twitter"/>
                    </div>
                    <div className="col-1 p-0 mt-1">
                        <i className="fa-solid fa-gear fa-xl"></i>
                    </div>
                </div>


                <ul className="nav nav-tabs border-bottom-">
                    <li className="nav-item p-0">
                        <a className="nav-link active p-2 ps-3 pe-3" href="for-you.html">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-2 ps-3 pe-3" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-2 ps-3 pe-3" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-2 ps-3 pe-3" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link p-2 ps-3 pe-3 d-sm-none d-md-flex"
                           href="entertainment.html">Entertainment</a>
                    </li>
                </ul>

                <div className="wd-main-image-area position-relative">
                    <img className="wd-main-image w-100 mt-1 position-relative"
                         src={require("../images/starship.jpg")} alt="starship.jpg"/>
                    <h2 className="text-light ms-2 position-absolute bottom-0 fw-bold">
                        SpaceX's Starship
                    </h2>
                </div>

                <PostSummaryList/>
            </div>
    );
};
export default ExploreComponent;
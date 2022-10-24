import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";

function Tuiter() {
    return(
        <div className={"row mt-2 mb-4"}>

            <div className={"col-2 col-md-2 col-lg-1 col-xl-2"}>
                <NavigationSidebar active="home"/>
            </div>

            <div className="col-10 col-lg-7 col-xl-6">
                <ExploreComponent/>
            </div>

            <div className={"d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"}>
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter;
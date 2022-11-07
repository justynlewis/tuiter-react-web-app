import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import TuitsList from "./tuits/TuitsList";
import HomeComponent from "./home";

const store = configureStore(
    {reducer: {
        who: whoReducer,
            tuits: tuitsReducer
    }
    }
)
function Tuiter() {
    return(
        <Provider store={store}>
            <div className={"row mt-2 mb-4"}>

                <div className={"col-2 col-md-2 col-lg-1 col-xl-2"}>
                    <NavigationSidebar active="home"/>
                </div>

                <div className="col-10 col-lg-7 col-xl-6">
                    <HomeComponent/>
                </div>

                <div className={"d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4"}>
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter;
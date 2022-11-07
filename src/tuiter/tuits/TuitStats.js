import React from "react";


const TuitStats = (
    {
        tuit = {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla.png",
            "liked": true,
            "replies": 1210,
            "retuits": 5001,
            "likes": 9914,
            "handle": "@funnyguy123",
            "tuit": "i hate twitter"
        }
    }
) => {

    return(
        <div className="row mt-2">

            <span className="col-3">
                <i className="fa-regular fa-comment"></i> {tuit.replies}
            </span>

            <span className="col-3">
                <i className="fa-solid fa-retweet wd-metadata-icon"></i> {tuit.retuits}
            </span>

            <span className="col-3">
                <i style={ tuit.liked === true ? {color: '#E52B50'} : {color: ''} } className="fa-solid fa-heart wd-metadata-icon"></i> {tuit.likes}
            </span>

            <span className="col-3">
                <i className="fa-solid fa-arrow-up-from-bracket wd-metadata-icon"></i>
            </span>
        </div>

)
}


export default TuitStats;
import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuit-thunks";


const TuitItem = (
    {
        tuit = {
            "_id": 345,
            "topic": "Energy",
            "userName": "Tesla",
            "title": "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
            "time": "4d",
            "image": "tesla.png",
            "liked": true,
            "disliked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 12,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 mt-1">
                    <img width={50} className="rounded-circle" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10 row p-0">
                    <div className="col-11">
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <div><span className="fw-bold">{tuit.username}</span> <i className="fa-solid fa-circle-check fa-xs"></i> {tuit.handle} - {tuit.time}</div>
                        {tuit.tuit}
                        <TuitStats
                            key={tuit._id}
                            tuit={tuit}
                        />
                    </div>
                </div>

            </div>

        </li>
    )
}
export default TuitItem;
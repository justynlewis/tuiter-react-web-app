import React, { useEffect } from "react";
import TuitItem from "./TuitItem";
import {useDispatch, useSelector} from "react-redux";
import "./index.css"
import { findTuitsThunk } from "../../services/tuit-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                                   <TuitItem
                                       key={tuit._id}
                                       tuit={tuit}
                                   />
                )
            }
        </ul>
    )
}
export default TuitsList;
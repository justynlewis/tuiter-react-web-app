import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuit-thunks";


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
            "disliked": false,
            "replies": 1210,
            "retuits": 5001,
            "likes": 9914,
            "dislikes": 526,
            "handle": "@funnyguy123",
            "tuit": "i hate twitter"
        }
    }
) => {

    const dispatch = useDispatch()

    return(
        <div className="row mt-2">

            <span className="col-2">
                <i className="fa-regular fa-comment"></i> {tuit.replies}
            </span>

            <span className="col-2">
                <i className="fa-solid fa-retweet wd-metadata-icon"></i> {tuit.retuits}
            </span>

            <span className="col-3">
                {tuit.liked && <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes - 1,
                    liked: false
                }))}
                className="bi bi-heart-fill me-2 text-danger"></i>}
                
                {!tuit.liked && <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true,
                }))}
                className="bi bi-heart me-2"></i>}
                
                {tuit.likes}

            </span>
            
            <span className="col-3">
                {tuit.disliked && <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes - 1,
                    disliked: false
                }))}
                className="bi bi-hand-thumbs-down-fill me-2 text-info"></i>}
                
                {!tuit.disliked && <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1,
                    disliked: true,
                }))}
                className="bi bi-hand-thumbs-down me-2"></i>}
                
                {tuit.dislikes}

            </span>
            
            

            <span className="col-2">
                <i className="fa-solid fa-arrow-up-from-bracket wd-metadata-icon"></i>
            </span>
        </div>

)
}


export default TuitStats;
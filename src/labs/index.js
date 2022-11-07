import React from 'react';
import Assignment6 from "./a6";
import Nav from "../nav";
import Assignment7 from "./a7";
import {Route, Routes} from "react-router";
import Tuiter from "../tuiter";

function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route index
                element={<Assignment6/>}/>
                <Route path="a7"
                       element={<Assignment7/>}/>
                <Route path="tuiter"
                       element={<Tuiter/>}/>
            </Routes>
        </div>
    );
}
export default Labs;
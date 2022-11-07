import React from 'react';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <Labs/>
        </BrowserRouter>
    );
}

export default App;
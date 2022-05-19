import React from 'react';
import AppRoutes from "./shop/mainDirectory/main";
import {HashRouter} from "react-router-dom";
import Header from "./shop/mainDirectory/header";

function App() {
    return (
        <React.Fragment>
            <HashRouter>
                <Header/>
                <AppRoutes/>
            </HashRouter>
        </React.Fragment>
    )
}

export default App;

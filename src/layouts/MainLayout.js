import {Outlet} from "react-router-dom";

import Header from "../components/header/Header";


function MainLayout() {
    return (
        <div>
            <Header/>
            <h2>content</h2>
            <Outlet/>
        </div>
    );

}

 export {MainLayout};
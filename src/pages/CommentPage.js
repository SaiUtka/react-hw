import {Outlet} from "react-router-dom";

import CommentsComponent from "../components/comments/CommentsComponent";

export default function CommentPage() {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );

};
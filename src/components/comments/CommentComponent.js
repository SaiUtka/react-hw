import {Link} from "react-router-dom";

export default function CommentComponent({item}) {
    return (
        <div>
            <h4>{item.id} - {item.body}</h4>
            <span><Link to={item.postId.toString()}>post</Link></span>

        </div>
    );

};
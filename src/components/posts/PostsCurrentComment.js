import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPostCurrentComment} from "../../services/service";
import PostComponent from "./PostComponent";

export default function PostsCurrentComment() {

    const {postId} = useParams()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPostCurrentComment(postId).then(value => setPosts([{...value}]))
    }, [postId])

    return (
        <div>
            {
                posts.map(value => <PostComponent item={value} key={value.id}/>)
            }

        </div>
    );

};
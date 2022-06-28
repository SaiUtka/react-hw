
import './App.css';
import Users from "./components/users/Users";
import {getPosts} from "./services/users_services";
import {useEffect, useState} from "react";
import Post from "./components/post/Post";

function App() {

    let [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);

    let getUserId = (id) => {
        getPosts(id).then(data => setPosts([...data]))
    }

    return (
    <div>
            {
             posts.map(value => <Post item={value} key={value.id}/>)
            }
            <Users getUserId={getUserId}/>
    </div>
  );
}

export default App;

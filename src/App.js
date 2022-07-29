import {Routes, Route} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import TodosPage from "./pages/TodosPage";
import AlbumPage from "./pages/AlbumPage";
import CommentPage from "./pages/CommentPage";
import PostsCurrentComment from "./components/posts/PostsCurrentComment";

function App() {

  return (
    <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumPage/>}/>
                <Route path={'comments'} element={<CommentPage/>}>
                    <Route path={':postId'} element={<PostsCurrentComment/>}/>
                </Route>
            </Route>

        </Routes>

    </div>
  );
}

export default App;

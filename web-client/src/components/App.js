import './css/App.css';
import SearchBar from "./SearchBar";
import PostsList from "./PostsList";
import {useState} from "react";

const App = () => {

    const [posts, setPosts] = useState([]);

    const updatePosts = (posts) => {
        setPosts(posts)
    }

    return (
        <div className="App">
            <SearchBar onDataChanged={updatePosts}/>
            <PostsList posts={posts}/>
        </div>
    );
}

export default App;

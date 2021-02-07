import './css/App.css';
import SearchBar from "./SearchBar";
import PostsList from "./PostsList";
import {useState} from "react";

const App = () => {

    const [posts, setPosts] = useState([{
        title: 'Hey there! 👋',
        text: `Enter a subreddit name in the search bar to see its top posts.`,
        url: `${process.env.PUBLIC_URL}/images/welcome.gif`
    }]);

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

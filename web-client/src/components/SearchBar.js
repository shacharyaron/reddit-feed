import React, {useState} from 'react';
import './css/SearchBar.css';

const ENTER_KEY = 'Enter';

const SearchBar = props => {

    const [subreddit, setSubreddit] = useState(null);

    const handleSearch = async (subreddit) => {
        alert(subreddit);
    }

    const handleKeyPress = (event) => {
        if (event.key === ENTER_KEY) {
            const subreddit = event.target.value;
            handleSearch(subreddit);
        }
    }

    return (
        < div className='search-bar-container'>

            < div className='logo-container'>
                <h1>reddit</h1>
            </div>

            < div className='search-bar-input-container'>
                <input type="text" id='search-bar' placeholder='Search'
                       onChange={event => setSubreddit(event.target.value)}
                       onKeyPress={handleKeyPress}
                />
            </div>

        </div>
    );

};

export default SearchBar;
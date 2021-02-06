import React, {useState} from 'react';
import './css/SearchBar.css';
import axios from 'axios';

//todo: change to production url or do || with env variable
const BASE_API_URL = 'http://localhost:5000/api/v1'
const ENTER_KEY = 'Enter';

const SearchBar = props => {

    const [subreddit, setSubreddit] = useState(null);

    const sendSearchRequest = async (subreddit) => {
        let response;
        try {
            response = await axios.get(
                `${BASE_API_URL}/subreddits/${subreddit}/top`,
                {
                    params: {
                        'limit': 10
                    }
                });
        } catch (error) {
            //todo: handle errors
            console.log(error);
            return [];
        }

        return response.data.articles;
    }

    const handleKeyPress = async (event) => {
        if (event.key === ENTER_KEY) {
            const subreddit = event.target.value;
            const apiResponse = await sendSearchRequest(subreddit);
            props.onDataChanged(apiResponse);
        }
    }

    return (
        < div className='search-bar-container shadow'>

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
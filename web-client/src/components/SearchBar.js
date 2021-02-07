import React, {useState} from 'react';
import './css/SearchBar.css';
import axios from 'axios';
import Loader from "react-loader-spinner";

const ENTER_KEY = 'Enter';

const SearchBar = props => {

    const [subreddit, setSubreddit] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendSearchRequest = async (subreddit) => {
        setIsLoading(true);
        if (!subreddit) return [];

        let response;
        try {
            response = await axios.get(
                `/api/v1/subreddits/${subreddit}/top`,
                {
                    params: {
                        'limit': 10
                    }
                });
        } catch (error) {
            return generateErrorMessage(error, subreddit)
        } finally {
            setIsLoading(false);
        }

        return response.data.articles;
    }

    const generateErrorMessage = (error, subreddit) => {
        let message;
        switch (error.response.statusText) {
            case 'Not Found':
                message = `Subreddit '${subreddit}' does not exist.`
                break;
            case 'Forbidden':
                message = `Subreddit '${subreddit}' is private.`
                break;
            default:
                message = 'Unexpected problem.'
                break;
        }
        return [{
            title: "We couldn't make that request 😞",
            text: message
        }];
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

            < div className='logo-container not-selectable'>
                <img id='logo' src={`${process.env.PUBLIC_URL}/images/logo128.png`}/>
                <h1 id='logo-text'>reddit</h1>
            </div>

            < div className='search-bar-input-container'>
                <input type="text" id='search-bar' placeholder='Search' autoComplete="off"
                       onChange={event => setSubreddit(event.target.value)}
                       onKeyPress={handleKeyPress}
                />
            </div>

            <Loader
                className='loading'
                type="ThreeDots"
                color="#586183"
                height={30}
                width={30}
                style={{display: isLoading ? 'block' : 'none'}}
            />

        </div>
    );

};

export default SearchBar;
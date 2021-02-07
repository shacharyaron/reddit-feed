import React from 'react';
import './css/Post.css';

const Post = props => {

    const isImage = (url) => {
        try {
            return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
        } catch (error) {
            return false;
        }
    }

    const isLinkToOriginalPost = (url) => {
        try {
            return (url.startsWith("https://www.reddit.com/r/"));
        } catch (error) {
            return false;
        }
    }

    const convertTimestampToLocalDate = (timestamp) => {
        if (!timestamp) return null;
        const epochTime = new Date(1970, 0, 1);
        epochTime.setSeconds(timestamp);
        return epochTime.toDateString();
    }

    const convertToSiFormat = (number) => {
        if (number < 1e3) return number;
        if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + "k";
        if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + "M";
        if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + "B";
        if (number >= 1e12) return +(number / 1e12).toFixed(1) + "T";
    }

    const Content = (props) => {
        if (isImage(props.url)) return <img src={props.url} id={props.id} alt={props.title}/>;
        if (!isLinkToOriginalPost(props.url)) return <a href={props.url}>{props.url}</a>;
        return <div/>
    };

    return (
        <article className='post-container shadow'>

            <div className='post-header'>
                <h1 id={'title'}>{props.title}</h1>
            </div>

            <div className='post-content'>
                <div className={'text'}>
                    {props.text}
                </div>
                <Content url={props.url}/>
            </div>

            <div className='post-information'>

                <div className='author-date-container'>
                    <h3 id='author'>{props.author}</h3>
                    <h3 id='created-date'>{convertTimestampToLocalDate(props.createdTimestamp)}</h3>
                </div>

                <div className='upvotes-container'>
                    <h3 id='post-upvotes'>{convertToSiFormat(props.upvotes)}</h3>
                </div>

            </div>

        </article>
    );

};

export default Post;
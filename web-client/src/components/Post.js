import React from 'react';
import './css/Post.css';

const Post = props => {

    const isImage = (url) => {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    const isLinkToOriginalPost = (url) => {
        return (url.startsWith("https://www.reddit.com/r/"));
    }

    const convertTimestampToLocalDate = (timestamp) => {
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
        <article className='post-container'>

            <div className='post-header'>
                <h1>{props.title}</h1>
                <h3>{convertTimestampToLocalDate(props.createdTimestamp)}</h3>
            </div>

            <div className='post-content'>
                {props.text}
                <Content url={props.url}/>
            </div>

            <div className='post-information'>
                <h3 id='post-upvotes'>{convertToSiFormat(props.upvotes)}</h3>
                <h3>{props.author}</h3>
            </div>

        </article>
    );

};

export default Post;
import React, {useState} from 'react';
import './css/PostsList.css';
import Post from "./Post";

const PostsList = props => {
    const dummy = {
        "subreddit": "pokemon",
        "articles": [{
            "id": "5ac0p2",
            "title": "If I get 100 upvotes, I'll buy everyone who upvotes a copy of Sun and Moon",
            "text": "I'm rich and bored. Make me proud Reddit! \n\nLeave a comment below after upvoting so I know to message you to send a copy.",
            "author": "PassingThroughRider",
            "createdTimestamp": 1477918058,
            "upvotes": 138599,
            "url": "https://www.reddit.com/r/pokemon/comments/5ac0p2/if_i_get_100_upvotes_ill_buy_everyone_who_upvotes/",
            "thumbnail": null
        }, {
            "id": "ey8lsv",
            "title": "[OC] Just a regular image of Ash, please don't zoom in",
            "text": null,
            "author": "JanDoedelGaming",
            "createdTimestamp": 1580743191,
            "upvotes": 80720,
            "url": "https://i.redd.it/lxf3np7i7qe41.png",
            "thumbnail": "https://a.thumbs.redditmedia.com/5on3fiLiP4Pgc8-gwkAb-Gsf73xc0lzhlLcZL2zlEF8.jpg"
        }, {
            "id": "emacp1",
            "title": "It's a little sad to think that we'll never see another official Pokémon game like this again. Farewell, 2D sprite era. You'll always have a special place in my heart.",
            "text": null,
            "author": "JustADudeAndHisPhone",
            "createdTimestamp": 1578580103,
            "upvotes": 75107,
            "url": "https://i.redd.it/sesdg8kljr941.gif",
            "thumbnail": "https://a.thumbs.redditmedia.com/BbzJ83lIc9tBnXsWQ-zw72_gj2gE3dknsxgvb-G5-u0.jpg"
        }, {
            "id": "79rvi8",
            "title": "If this post gets 100 upvotes, I’ll buy everyone who upvotes a copy of Ultra Sun and Ultra Moon",
            "text": "I'm rich and bored. Make me proud Reddit!\n\nLeave a comment below after upvoting so I know to message you to send a copy.",
            "author": "Satokech",
            "createdTimestamp": 1509408169,
            "upvotes": 69888,
            "url": "https://www.reddit.com/r/pokemon/comments/79rvi8/if_this_post_gets_100_upvotes_ill_buy_everyone/",
            "thumbnail": null
        }, {
            "id": "c4r974",
            "title": "Mhm",
            "text": null,
            "author": "IncognitoLens_",
            "createdTimestamp": 1561395037,
            "upvotes": 67935,
            "url": "https://i.redd.it/yzkuw7vj3c631.png",
            "thumbnail": "https://b.thumbs.redditmedia.com/AAsHev79VWPv9w8KNZQWKamzu26XoygBM5IEAoBta9U.jpg"
        }]
    }

    const [posts, setPosts] = useState(dummy.articles);

    return (
        <div className='posts-list-container'>
            {posts.map(post => {
                return (<Post
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        author={post.author}
                        createdTimestamp={post.createdTimestamp}
                        upvotes={post.upvotes}
                        url={post.url}
                        thumbnail={post.thumbnail}
                    />
                );
            })}
        </div>
    );

};

export default PostsList;
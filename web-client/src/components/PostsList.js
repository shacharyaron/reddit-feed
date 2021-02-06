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
        }, {
            "id": "d7sv82",
            "title": "The entire first arc of the Pokemon anime summarized in one GIF",
            "text": null,
            "author": "niggamachine312",
            "createdTimestamp": 1569170169,
            "upvotes": 64843,
            "url": "https://i.redd.it/gsctu1vza6o31.gif",
            "thumbnail": "https://b.thumbs.redditmedia.com/Tu2GWuAjo31L69DCD390JrgBMf5YBxeVdr8LgznaouU.jpg"
        }, {
            "id": "cbuzi3",
            "title": "High quality animations from a Chinese bootleg pokemon game",
            "text": null,
            "author": "MrGamer419",
            "createdTimestamp": 1562846943,
            "upvotes": 58724,
            "url": "https://i.redd.it/yv2vqtyk0o931.gif",
            "thumbnail": "https://b.thumbs.redditmedia.com/bMaylPxzuje8Mw66O8QrVyWPJnpKl51EC6Jf92Xr2Yk.jpg"
        }, {
            "id": "eepbz9",
            "title": "Surprising my best friend who hasn’t gotten to play Pokémon since Sun and Moon with Shield and the means to play",
            "text": null,
            "author": "johnnycoolname",
            "createdTimestamp": 1577129707,
            "upvotes": 58173,
            "url": "https://v.redd.it/4aq6a6njqf641",
            "thumbnail": "https://b.thumbs.redditmedia.com/rvzOH0eTTLwdRJBjF1dnP-LvhpKOeixhfe0r7bJlXws.jpg"
        }, {
            "id": "c1buqz",
            "title": "A comic I made about the National Dex cut",
            "text": null,
            "author": "FestusFlare",
            "createdTimestamp": 1560702911,
            "upvotes": 58068,
            "url": "https://i.redd.it/ihx65yyaxq431.png",
            "thumbnail": "https://a.thumbs.redditmedia.com/0E_1TI9AIkbsdO8ZRpeExIBzfRgysv1aUyHDg7YEOb4.jpg"
        }, {
            "id": "e95nrx",
            "title": "*Sacrifice tactics intensifies* [OC]",
            "text": null,
            "author": "DarkFangz",
            "createdTimestamp": 1576061892,
            "upvotes": 56326,
            "url": "https://i.redd.it/cmjoy4sljz341.jpg",
            "thumbnail": "https://b.thumbs.redditmedia.com/y17egocd8HaAaXKY6Q_nTthfZ_aSLDbkjnkhzjmOZUE.jpg"
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
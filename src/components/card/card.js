import './card.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Vote } from '../vote/vote';
import { Comment } from '../comment/comment';

const Card = ({ data }) => {
    
    return (
    <>
        <div className="outerContainer">
            <Vote />
            <div className="innerContainer">
                <Comment />
                <h3>Post Name</h3>
                <div className="postInfo">
                    <h5>r/subreddit</h5>
                    <h6>Posted by <span className="username">name</span></h6>
                </div>
            
            </div>
        </div>
    </>
    )
    
};

export { Card };
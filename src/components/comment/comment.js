import './comment.css';
import bubble from '../../images/bubble.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Comment = () => {
    
    return (
        <div className="commentContainer">
            <img src={bubble} alt="comment bubble" className="bubble" />
            <p>5k comments</p>
        </div>
    )
    
};

export { Comment };
import './vote.css';
import triangle from '../../images/triangle.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Vote = () => {
    
    
    return (
        <div className="voteContainer">
            <img src={triangle} className="voteUp" alt="up vote" />
            <p>100k</p>
            <img src={triangle} className="voteDown" alt="down vote" />
        </div>
    )
    
};

export { Vote };
import './goTop.css';
import arrow from '../../images/arrow.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const GoTop = () => {
    
    return (
        <img src={arrow} alt="return to top" className="goTopArrow" />
    )
    
};

export { GoTop };
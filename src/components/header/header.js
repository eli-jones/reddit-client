import './header.css';
import search from '../../images/search.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Search } from '../search/search';
import { Menu } from '../menu/menu';

const Header = () => {
    /*
    const dispatch = useDispatch();
    
    const handleMenuClick = (e) => {
        dispatch(setMenuDisplay());
    }
    */
        
    return (
        
        <div className="header-container">
            <Menu />
            <h1>minnit</h1>
            <img src={search} alt="search" id="searchIcon" />
        </div>
        
    )
};

export { Header };
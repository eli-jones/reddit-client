import'./menu.css';
import x from '../../images/x.png';
import menu from '../../images/menu.svg';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { DarkMode } from '../darkMode/darkMode';

const Menu = () => {
    
    let menuOn = false;

    const menuToggle = () => {
        menuOn = !menuOn;

        let toggle = document.getElementById('menuIcon');
        toggle.innerHTML = menuOn;
    }
    
    if (menuOn) {
        // show menu if menuOn is true
        return (
            <div id="slider">
                <p id="menuHead">subreddits</p>
                <div className="menuList">
                    <p>r/subreddit1</p>
                    <p>r/subreddit2</p>
                    <p>r/subreddit3</p>
                </div>
            <div className="buttonRow">
                <DarkMode />
                <button className="close"><img src={x} alt="close menu" onClick={menuToggle} /></button>
            </div>
            </div>
        ) 
    } else {
        // show hamburger icon if menuOn is false
        return (
            <img src={menu} alt="menu" id="menuIcon" onClick={menuToggle} />
        )
    }
    
    
    
}

export { Menu };
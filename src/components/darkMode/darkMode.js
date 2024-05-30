import './darkMode.css';
import sun from '../../images/sun.svg';
import moon from '../../images/moon.svg';

const DarkMode = () => {

    //toggle styles
    function darkModeToggle() {
        
        const text = document.body;
        const header = document.querySelector('.header-container');
        const cards = document.querySelector('.wrapper');
        const card = document.querySelector('.outerContainer');
        
        text.classList.toggle('darkMode');
        header.classList.toggle('darkMode');
        cards.classList.toggle('darkMode');
        card.classList.toggle('darkMode');
    
    }
    
    //toggle darkMode image
    if(!'darkMode') {
        return (
            
            <img src={sun} alt="turn on light mode" className="dmImage" onClick={darkModeToggle}/>
                
        )
    } else {
        return (
            
            <img src={moon} alt="turn on dark mode" className="dmImage" onClick={darkModeToggle}/>
            
        )
    }
    
}
 
export { DarkMode };
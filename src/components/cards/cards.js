import './cards.css';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Card } from '../card/card';

const Cards = () => {
    
    return (
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
    
};

export { Cards };
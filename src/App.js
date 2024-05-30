import './App.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from './components/header/header';
import { Cards } from './components/cards/cards';
import { GoTop } from './components/goTop/goTop';
import { DarkMode } from './components/darkMode/darkMode';

function App() {

  
    
  return (
      <>
        <Header />
        <div className="wrapper">
          <Cards />
          <GoTop />
        </div>
      </>
  );
    
}

export default App;

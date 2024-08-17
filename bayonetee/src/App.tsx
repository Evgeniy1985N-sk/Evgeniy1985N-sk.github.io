import './App.css';
import './components/Header/Header.scss';
import './components/Menu/Menu.scss';



import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';


import Homepage from './pages/Homepage';
import Episodespage from './pages/Episodespage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Notfoundpage from './pages/Notfoundpage';
import ButtonMenu from './components/ButtonMenu/ButtonMenu';
import Logo from './components/Logo/Logo';


function App() {

  let [active, setActive] = useState(false);

  function handleClick() {
    setActive(active => !active);
  }

  return (
    
      <>

        <header className={active ? 'header header_active' : 'header'}>
          <div className="container">

            <div className="header__row">

              <Logo />

              <ButtonMenu onClick={handleClick} active={active} addClass='header__button-menu' />

              <div className='header__wrap-menu'>

                <ul className="menu">
                  <li>
                    <Link to="/" className='menu-item'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Episodespage" className='menu-item'>
                      Episodes
                    </Link>
                  </li>
                  <li>
                    <Link to="/Aboutpage" className='menu-item'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contactpage" className='menu-item'>
                      Contact
                    </Link>
                  </li>
                </ul>

              </div>

            </div>

          </div>
        </header>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Episodespage" element={<Episodespage />} />
          <Route path="/Aboutpage" element={<Aboutpage />} />
          <Route path="/Contactpage" element={<Contactpage />} />
          <Route path="*" element={<Notfoundpage/>} />
        </Routes>
        
      </>

  );
}

export default App;
import './Menu.scss';

import { Routes, Route, Link } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import Episodespage from '../../pages/Episodespage';
import Aboutpage from '../../pages/Aboutpage';
import Contactpage from '../../pages/Contactpage';
import Notfoundpage from '../../pages/Notfoundpage';


export default function Menu() {
  return(
    <>

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

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Episodespage" element={<Episodespage />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/Contactpage" element={<Contactpage />} />
        <Route path="*" element={<Notfoundpage/>} />
      </Routes>

    </>
  )
}
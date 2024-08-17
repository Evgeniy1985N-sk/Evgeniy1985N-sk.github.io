import './Header.scss';
import Menu from '../Menu/Menu';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import Logo from '../Logo/Logo';
import { useState } from 'react';



export default function Header() {

  let [active, setActive] = useState(false);

  function handleClick() {
    setActive(active => !active);
  }

  return (

    <header className={active ? 'header header_active' : 'header'}>
      <div className="container">

        <div className="header__row">

          <Logo />

          <ButtonMenu onClick={handleClick} active={active} addClass='header__button-menu' />

          <div className='header__wrap-menu'>

            <Menu />
            
          </div>

        </div>

      </div>
    </header>

  )

}
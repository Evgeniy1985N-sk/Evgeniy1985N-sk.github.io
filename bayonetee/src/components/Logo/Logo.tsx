import './Logo.scss';
import logo from './Logo.svg';


export default function Logo(){
  return(
    <a href="/">
      <img className = 'logo' src={logo} alt="logo" width={120} height={40} />
    </a>
  )
}
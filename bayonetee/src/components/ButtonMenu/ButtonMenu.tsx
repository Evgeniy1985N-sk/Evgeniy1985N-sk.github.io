import './ButtonMenu.scss'

export default function ButtonMenu({active = false, onClick, addClass=''}) {

  return (

    <button onClick={onClick} className=  {active ? `${addClass} button-menu button-menu_active` : `${addClass} button-menu`} >
      <i className='button-menu__line'></i>
    </button>

  )

}
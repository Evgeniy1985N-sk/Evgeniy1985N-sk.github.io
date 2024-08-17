import './MenuItem.scss'

export default function MenuItem({name, link}) {
  return(
    <li>
      <a className='menu-item' href={link}>
        {name}
      </a>
    </li>
  )
}
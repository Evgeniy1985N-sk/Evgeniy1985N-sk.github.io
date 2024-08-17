import './SocialItem.scss';

export default function SocialItem(props) {
  return(
    <a className="social-item" href={props.href}>
      <img 
        className="social-item__img" 
        src={props.src}
        alt={props.alt}
      />
    </a>
  )
}
import './Social.scss';
import { items } from './data';
import SocialItem from '../SocialItem/SocialItem';

export default function SocialItems() {

  return(
    <div className="social-items">
      { items.map((item: any, index: number) => <SocialItem key={index} {... item} />) }
    </div>
  )
  
}
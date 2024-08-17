import './EpisodeSection.scss';

import {items} from './data';

import { useState, useEffect } from 'react';
import TitleBase from '../TitleBase/TitleBase';
import EpisodeItem from '../EpisodeItem/EpisodeItem';


export default function EpisodeSection() {

  let [isVisible, setIsvisible] = useState(false);
  
  function handleClick() {
    setIsvisible(isVisible => !isVisible);
  }

  useEffect(() => {
    const blocksObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(item => {
          console.log('dddd');
          if (item.isIntersecting) {
            item.target.classList.add('start-anim')
          }
          else {
            item.target.classList.remove('start-anim')
          }
        })
      },
      {}
    );
    
    document
      .querySelectorAll('.animated-js')
      .forEach((block) => blocksObserver.observe(block))
  },[isVisible])

  return(

    <section className="episode-section section">
      <div className="container">

        <div className="episode-section__wrap-title wrap-title">

          <TitleBase
            text="Latest episodes"
          />

          <button onClick={handleClick} className="button">
            {isVisible ? 'Hide episodes' : 'View all episodes'}
          </button>

        </div>

        <div className="episode-section__items">
          {
            items.map(function(item: any, index: number) {
              if (isVisible && index > 3) return <EpisodeItem classAdd={"animated-js"} text={item.text} key={item.id} {... item} />
              if (index >= 3) return;
              return <EpisodeItem text={item.text} key={item.id} {... item} />
            })
          }
        </div>

      </div>
    </section>

  )
}
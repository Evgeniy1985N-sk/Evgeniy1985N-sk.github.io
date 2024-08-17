import Title from '../Title/Title';
import SocialItems from '../SocialItems/SocialItems';
import './IntroSection.scss';
import man from './man.png';


export default function IntroSection() {
  return(
    <section className="intro-section">
      <div className="container">

        <div className="intro-section__row">
          <div className="intro-section__wrap-img">
            <img className ='intro-section__img' src={man} alt="man" width={650} height={873} />
          </div>
          <div className="intro-section__content">

            <Title />

            <div className="intro-section__social">
              <p className="intro-section__social-text">
                Listen on
              </p>

              <SocialItems />

            </div>

          </div>
        </div>


      </div>
    </section>
  )
}
import Button from '../Button/Button';
import styles from './EpisodeItem.module.scss';



export default function EpisodeItem({classAdd = '', text,src,alt,type,id,title}) {

  return(
    <div className={styles.box + ' ' + classAdd}>
      <img className={styles.img} src={src} alt={alt} />
      <div className={styles.content}>
          <span className={styles.badge}>
            {type}
          </span>
          <span className={styles.info}>
            Episode {id}
          </span>
          <div className={styles.title}>
            {title}
          </div>
          <p className={styles.text}>
            {text}
          </p>
          <Button addClass={styles.button}
            text="View Episode Details"
          />
      </div>
    </div>
  )

}
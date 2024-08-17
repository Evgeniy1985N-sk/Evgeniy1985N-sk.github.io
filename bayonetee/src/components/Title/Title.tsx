import './Title.scss';


export default function Title({addClass=''}) {
  return(
    <h1 className = 'title'>
      Take your<br /> podcast to the <span className="title__text-decor">next</span> <b className="title__text-accent">level</b>
    </h1>
  )
}
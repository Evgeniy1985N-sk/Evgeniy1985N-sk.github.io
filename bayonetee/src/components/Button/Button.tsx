export default function Button({addClass='', text}) {

  return (

    <button className={'button ' + addClass} >
      {text}
    </button>

  )

}
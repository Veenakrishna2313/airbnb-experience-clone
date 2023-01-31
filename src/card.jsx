import Star from './assets/images/star.png';
import Katie from './assets/images/katie-zaferes.png'

function Card(props){
   
  return(  
  <div className='card'>
    <img className='card-image' src={`./assets/images/${props.img}`}/>
    <div className='card-stats'>
      <img className="star-image"src={Star}/>
       <span className='card-rating grey'>{props.rating} </span>
       <span className='rating--count grey'>({props.reviewCount}) .</span>
      <span className='card-country grey'>{props.Country}</span>
    </div>      
      <p className='card-description'> {props.title}</p>
      <p className='card-pricing'><b>From ${props.price}</b> / person</p>
    </div>
  )
}

export default Card;
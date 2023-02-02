import Star from '../assets/images/star.png';
import katie from '../../src/assets/images/katie-zaferes.png'

function Card(props){

  
   
  let badgeText;
  if(props.card.openSpots==0){
    badgeText="SOLD";
  }
  else if(props.card.location==="Online"){
    badgeText="ONLINE"
  }
  return(  
    

  <div className='card'>
   {badgeText && <div className='card--badge'>{badgeText}</div>} 
    <img className='card-image' src={`../assets/images/${props.card.coverImg}`}/>
      <div className='card-stats'>
      <img className="star-image"src={Star}/>
       <span className='card-rating grey'>{props.card.stats.rating} </span>
       <span className='rating--count grey'>({props.card.stats.reviewCount}) .</span>
      <span className='card-country grey'>{props.card.location}</span>
    </div>      
      <p className='card-description'> {props.card.title}</p>
      <p className='card-pricing'><b>From ${props.card.price}</b> / person</p>
    </div>
  )
}

export default Card;
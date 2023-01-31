import ImageGrid from './assets/images/photo-grid.png';

function Hero(){
  return(
    <div className="Hero">
      <div className="image-grid">
        <img src={ImageGrid}/>
      </div>
      
      <h1 className="hero--header">Online Experiences</h1>
      <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
    </div>
  )
}

export default Hero;
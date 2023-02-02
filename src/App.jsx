import './App.css';
import Navbar from './Components/navbar';
import Hero from './Components/hero';
import Card from './Components/card';
import katie from './assets/images/katie-zaferes.png';
import data from './data';



function App() {

  const cards=data.map((card)=><Card key={card.id} card={card}/>)

  
 return(
  <div>
    <Navbar/>
    <Hero/>
    <section className='card-list'>
      {cards}
    </section>
    
   
   
  </div>
 ) 
  
}

export default App;

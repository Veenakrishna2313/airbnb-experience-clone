import logo from '../assets/images/airbnb-logo.png'

function Navbar(){
  return(
    <div className='navbar'>
     <img className="nav-logo" src={logo}/>
    </div>
  )
}

export default Navbar;
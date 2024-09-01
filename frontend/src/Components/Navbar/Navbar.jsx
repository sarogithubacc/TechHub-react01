import './Navbar.css'
import React, { useState,useContext } from 'react'
import image from '../Assets/image.png'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { ShopContext } from '../../Context/ShopContext';
export default function Navbar() {
  const[menu,setMenu]=useState("")
  const {CartItems } = useContext(ShopContext);
  const totalItems = Object.values(CartItems).reduce((acc, value) => acc + (value > 0 ? 1 : 0), 0);
  return (
    <div className='navbar'>
      <div className='navbar-icon'>
          <Link to='/' ><img src={image} alt='LOGO' id='image-resize'></img></Link>  
            <Link to='/' style={{textDecoration:'none'}}><p className='CompanyName'>TECH HUB</p></Link>
      </div>
      <ul className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none',color:' #626262'}}>Shop</Link>{menu==="shop"? <hr /> :''}</li>
      <li onClick={()=>{setMenu("televisions")}}><Link to='/televisions' style={{textDecoration:'none',color:' #626262'}}>Televisions</Link>{menu==="televisions"? <hr /> :''}</li>
      <li onClick={()=>{setMenu("mobiles")}} ><Link to='/mobiles' style={{textDecoration:'none',color:' #626262'}}>Mobiles</Link>{menu==="mobiles"? <hr /> :''}</li>
      <li onClick={()=>{setMenu("audio&gaming")}}><Link to='/audio&gaming' style={{textDecoration:'none',color:' #626262'}}>Audio&Gaming</Link>{menu==="audio&gaming"? <hr /> :''}</li>
      
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>
       : <Link to='/Login' style={{textDecoration:'none',color:' #626262'}}><button><div className='styleforloginbtn'>Login<CircleUser style={{marginLeft:'8px',marginTop:'-0px'}} /></div></button></Link>}
        <Link to='/Cart' style={{textDecoration:'none',color:' #626262'}}><ShoppingCart size={40}/></Link>
        <div className="nav-cart-count">{totalItems}</div>
      </div>
    
    </div>
  
  )
}

import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { CircleFadingPlus } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart}=useContext(ShopContext)
    const notify = () =>{toast.success("Product Added to Cart!",{
      position:'top-center',
  });console.log("func called")}
    
  return (
    <div className='productdisplay'>
      <div className="productdislay-left">
          <div className="productdisplay-img">
            <img className='productdisplay-main-img'src={product.image} alt='' />
          </div>
          <div className="producdisplay-img-list">
            <img src= {product.image} alt=''/>
            <img src= {product.image} alt='' />
            <img src= {product.image} alt='' />
            <img src= {product.image} alt=''/>
          </div> 
          
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star_icon}alt='' />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon}alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-price">
            <div className="productdisplay-right-price-old">
                ₹{product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ₹{product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
          {product.desc}
        </div>
        <button onClick={()=>{addToCart(product.id);notify()}}><div className='summa1'>ADD TO CART <CircleFadingPlus style={{marginLeft:'8px',marginTop:'-4px'}}/></div></button>
        <p className='productdisplay-right-catogory'><span>Category:</span>{product.category}</p>
        <p className='productdisplay-right-catogory'><span>Tags:</span>TVs,32Inch,64Inch,73Inch</p>
      
      </div>
      <ToastContainer />

    </div>
  )
}

export default ProductDisplay

import React, { useContext, useEffect } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import { CircleX } from 'lucide-react';
import logo from '../Assets/icons8-shopping-cart.gif';
import { Link } from 'react-router-dom';

const Cartitems = () => {
  const { getTotalCartItem, all_product, CartItems, removeFromCart } = useContext(ShopContext);

  useEffect(() => {}, [CartItems]);

  const isCartEmpty = Object.values(CartItems).every(value => value === 0);
  const totalItems = Object.values(CartItems).reduce((acc, value) => acc + (value > 0 ? 1 : 0), 0);

  return (
    <div className='cartitems'>
      {!isCartEmpty && (
        <div className="cartitem-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantitity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      )}
      {!isCartEmpty&&<hr />}

      {isCartEmpty ? (
        <div className="cart">
          <img src={logo} alt="loading..." />
          <div>
            <h2>Your Cart is empty</h2>
            <h3 className="empty-cart"><Link to='/' style={{ textDecoration: 'none' }}>Pick up where you left off</Link></h3>
          </div>
        </div>
      ) : (
        <>
          {all_product.filter(e => CartItems[e.id] > 0).map((e) => (
            <div key={e.id}>
              <div className="cartitem-format-main">
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                <p>₹{e.new_price * CartItems[e.id]}</p>
                <CircleX onClick={() => removeFromCart(e.id)} />
              </div>
              <hr />
            </div>
          ))}

          <div>
            <div>
              <h1>Cart Total</h1>
              <div className='cart-subtotal'>
                <p>SubTotal</p>
                <p>₹{getTotalCartItem()}</p>
              </div>
              <hr />
              <div className='cart-shipping'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className='cart-total'>
                <h3>Total</h3>
                <h3>₹{getTotalCartItem()}</h3>
                <p>Total Items: {totalItems}</p>
              </div>
            </div>
            <button className='cart-btn'>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cartitems;

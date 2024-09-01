import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';
const Breadcrums = (props) => {
    const {product} =props;
    const categoryLinks = {
      televisions: '/televisions',
      mobiles: '/mobiles',
      'audio&gaming': '/audio&gaming'
    };
    const categoryLink = categoryLinks[product.category] || '/';
  return (
    <div className='breadcrum'>
    <Link to='/'>HOME</Link>
    <img src={arrow_icon} alt='arrow' />
    <Link to='/'>SHOP</Link>
    <img src={arrow_icon} alt='arrow' />
    <Link to={categoryLink}>{product.category}</Link>
    <img src={arrow_icon} alt='arrow' />
    {product.name}
  </div>
  )
}

export default Breadcrums

import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
// import all_product from '../Components/Assets/all_product';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt='' style={{alignItems:'center',alignContent:'center',marginLeft:'80px'}}></img>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
         sort by <img src={dropdown_icon} alt='' className='shoipcategory-banner'></img>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image}
              new_price={item.new_price} old_price={item.old_price}
              />

          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        EXPLORE MORE
      </div>
    </div>
  )
}

export default ShopCategory;
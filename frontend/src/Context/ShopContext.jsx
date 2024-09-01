import React,{createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";
import { useEffect } from "react";

export const ShopContext = createContext(null);
 const getDefaultCart =()=>{
     let cart ={};
     for (let index = 0; index < all_product.length+1; index++) {
         cart[index]=0;
        
     }
   return cart;
    }
const ShopContextProvider =(props)=>{
    // const[all_product,setAllproduct] = useState([]);
    // useEffect(()=>{
    //    fetch('http://localhost:4000/allproducts')
    //    .then((response)=>response.json())
    //    .then((data)=>setAllproduct(data))
    // },[])
    const [CartItems,setCartItems]=useState(getDefaultCart());
    
    
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(CartItems);
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    const getTotalCartItem = () => {
        let totalAmount = 0;
        for (const item in CartItems) {
          if (CartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            totalAmount += itemInfo.new_price * CartItems[item];
          }
        }
        return totalAmount;   
      
      };
    const contextValue ={getTotalCartItem,all_product,CartItems,addToCart,removeFromCart};
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
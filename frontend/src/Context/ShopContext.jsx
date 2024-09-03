import React,{createContext, useState} from "react";
// import all_product from "../Components/Assets/all_product";
import { useEffect } from "react";

export const ShopContext = createContext(null);
 const getDefaultCart =()=>{
     let cart ={};
     for (let index = 0; index < 300+1; index++) {
         cart[index]=0;
        
     }
   return cart;
    }
const ShopContextProvider =(props)=>{
    const[all_product,setAllproduct] = useState([]);
    useEffect(()=>{
       fetch('https://techhub-react01.onrender.com/allproducts')
       .then((response)=>response.json())
       .then((data)=>setAllproduct(data))
       if(localStorage.getItem('auth-token')){
        fetch('https://techhub-react01.onrender.com/getcart',{
            method:'POST',
            headers:{
                Accept:'application/folrm-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:"",
        }).then((response)=>response.json())
        .then((data)=>setCartItems(data))
       }
    },[])
    const [CartItems,setCartItems]=useState(getDefaultCart());
    
    
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if (localStorage.getItem('auth-token')) {
            fetch('https://techhub-react01.onrender.com/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'content-type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if (localStorage.getItem('auth-token')) {
            fetch('https://techhub-react01.onrender.com/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'content-type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        
    }
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

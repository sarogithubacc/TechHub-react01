import React, { useEffect, useState } from "react";
import "./Popular.css"; 
import { useNavigate } from "react-router-dom";
const Popular = () => {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://techhub-react01.onrender.com/allproducts");
        const data = await response.json();
        setProducts(data);

        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="popular">
      <h1>Popular Products</h1>
      <hr />
      <div className="popular-item">
        {randomProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)} 
            style={{ cursor: "pointer" }}
          >
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">₹{product.new_price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Popular;

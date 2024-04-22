import React, { useState, useEffect } from "react";
import "./ProductPage.css";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="ProductPage">
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <p className="category">{product.category}</p>
            {/* <p className="description">{product.description}</p> */}
            <p className="rating">{product.rating.rate}🌟</p>
            <p className="price">${product.price}</p>
            <a href="#" className="btn">
              Buy Now
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}




export default ProductPage;

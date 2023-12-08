import React from "react";
import data from "../data";

const Home = () => {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div key={product.slug} className="product">
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="product-item">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p>
                <strong>Ugx:{product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
